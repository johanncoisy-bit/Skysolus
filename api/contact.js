// Réception du formulaire de devis et envoi par e-mail (fonction Vercel).
//
// Variables d'environnement à définir dans Vercel (Settings › Environment Variables) :
//   SMTP_USER  adresse de la boîte qui envoie, ex. contact@skysolus.com   (obligatoire)
//   SMTP_PASS  mot de passe de cette boîte                               (obligatoire)
//   SMTP_HOST  serveur SMTP, ssl0.ovh.net par défaut (offre MX Plan OVH)
//   SMTP_PORT  465 par défaut (SSL)
//   MAIL_TO    destinataire(s) des demandes, séparés par des virgules ; SMTP_USER par défaut
import nodemailer from 'nodemailer';

const LIMITES = { nom: 120, societe: 160, email: 200, telephone: 40, mission: 80, lieu: 200, date: 200, message: 5000 };
const DELAI_MIN_MS = 3000; // un humain met plus de 3 s à remplir le formulaire
const envois = new Map(); // limite simple par adresse IP (par instance)

const propre = (v, max) => String(v ?? '').replace(/\r\n?/g, '\n').trim().slice(0, max);
const uneLigne = (v, max) => propre(v, max).replace(/\s+/g, ' ');
const echapper = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const emailValide = (e) => /^[^\s@<>,;"]+@[^\s@<>,;"]+\.[a-z]{2,}$/i.test(e);

function tropDEnvois(ip) {
  const maintenant = Date.now();
  const recents = (envois.get(ip) || []).filter((t) => maintenant - t < 10 * 60 * 1000);
  recents.push(maintenant);
  envois.set(ip, recents);
  return recents.length > 5;
}

function lireCorps(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch { return Object.fromEntries(new URLSearchParams(req.body)); }
  }
  return {};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Méthode non autorisée.' });
  }

  const corps = lireCorps(req);

  // Pièges à robots : champ caché rempli ou envoi trop rapide → on fait comme si tout allait bien
  const debut = Number(corps._t);
  if (corps._gotcha || (debut && Date.now() - debut < DELAI_MIN_MS)) {
    return res.status(200).json({ ok: true });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'inconnue';
  if (tropDEnvois(ip)) {
    return res.status(429).json({ ok: false, error: 'Trop de demandes envoyées. Réessayez dans quelques minutes ou appelez-nous.' });
  }

  const d = {
    nom: uneLigne(corps.nom, LIMITES.nom),
    societe: uneLigne(corps.societe, LIMITES.societe),
    email: uneLigne(corps.email, LIMITES.email),
    telephone: uneLigne(corps.telephone, LIMITES.telephone),
    mission: uneLigne(corps.mission, LIMITES.mission),
    lieu: uneLigne(corps.lieu, LIMITES.lieu),
    date: uneLigne(corps.date, LIMITES.date),
    message: propre(corps.message, LIMITES.message),
  };
  const consentement = corps.consentement === true || corps.consentement === 'on' || corps.consentement === 'true';

  if (!d.nom || !d.mission || !d.message || !emailValide(d.email) || !consentement) {
    return res.status(400).json({ ok: false, error: 'Remplissez le nom, un e-mail valide, le type de mission et votre besoin, puis cochez l’accord.' });
  }

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error('Formulaire de contact : SMTP_USER ou SMTP_PASS manquant dans les variables d’environnement.');
    return res.status(500).json({ ok: false, error: 'Le service d’envoi n’est pas configuré.' });
  }
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'ssl0.ovh.net',
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const champs = [
    ['Nom', d.nom], ['Société', d.societe], ['E-mail', d.email], ['Téléphone', d.telephone],
    ['Mission', d.mission], ['Lieu', d.lieu], ['Date souhaitée', d.date],
  ];
  const texte = [...champs.map(([k, v]) => `${k} : ${v || '-'}`), '', 'Besoin :', d.message, '', `Envoyé depuis le formulaire du site (IP ${ip}).`].join('\n');
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:15px">
${champs.map(([k, v]) => `<tr><td style="color:#555;vertical-align:top"><b>${k}</b></td><td>${echapper(v || '-')}</td></tr>`).join('\n')}
</table>
<p style="font-family:Arial,sans-serif;font-size:15px"><b>Besoin :</b><br>${echapper(d.message).replace(/\n/g, '<br>')}</p>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#888">Envoyé depuis le formulaire du site (IP ${echapper(ip)}). Répondez directement à cet e-mail pour écrire à ${echapper(d.nom)}.</p>`;

  try {
    await transport.sendMail({
      from: { name: 'Site Skysolus', address: SMTP_USER },
      to: (process.env.MAIL_TO || SMTP_USER).split(',').map((s) => s.trim()).filter(Boolean),
      replyTo: { name: d.nom, address: d.email },
      subject: `Demande de devis : ${d.mission} · ${d.nom}`,
      text: texte,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Formulaire de contact : échec de l’envoi SMTP', err);
    return res.status(502).json({ ok: false, error: 'L’envoi n’a pas abouti.' });
  }
}
