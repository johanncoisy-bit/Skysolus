# Sky Solus

Site de **SKY SOLUS** : missions aériennes par drone (DJI Mini 5 Pro, DJI Matrice 4T) et ULM (Bristell XL8) pour l’immobilier, l’inspection technique, le suivi de chantier et la thermographie, depuis Hyères (Var).

Structure et ton définis par le **cahier des charges du 11 novembre 2026**.

## Arborescence

| Page | URL | Contenu dans |
|---|---|---|
| Accueil | `/` | `src/pages/index.astro` |
| Prestations (5 fiches, trame en 7 points) | `/prestations`, `/prestations/<slug>` | `src/prestations.ts` |
| Secteurs d’activité | `/secteurs` | `src/secteurs.ts` |
| Moyens aériens | `/moyens-aeriens` | `moyens` dans `src/content.ts` |
| Réalisations / galerie | `/realisations` | `realisations` dans `src/content.ts` |
| L’esprit Sky Solus | `/esprit-sky-solus` | `esprit` dans `src/content.ts` |
| Contact / devis | `/contact` | `src/components/ContactForm.astro`, `api/contact.js` |

Hors menu (référencement, liens en pied de page) : zones du Var (`/zones`), régions (`/france`, `src/regions.ts`), actualités (`/actualites`).

Les anciennes adresses (`/flotte`, `/a-propos`, anciennes fiches prestations) sont redirigées dans `vercel.json`.

## Règles éditoriales (cahier des charges)

- Ne pas présenter comme disponible une prestation en préparation : `statut: 'preparation'` affiche « En développement ».
- Ne pas afficher de matériel ou de qualification non confirmés.
- Chaque prestation explique ses limites ; pas de promesse qu’une inspection remplace un diagnostic.
- Pas de superlatifs ni de « fiable » comme argument.

## Ajouter une réalisation

Déposer l’image dans `public/realisations/`, puis ajouter une entrée dans `realisations` (`src/content.ts`) : catégorie, texte alternatif, type de mission, objectif, lieu si publiable. N’utiliser que des images dont la publication est autorisée.

## Formulaire de contact

Fonction Vercel `api/contact.js` (envoi SMTP OVH). Pièces jointes : 5 fichiers, 3 Mo au total (les photos sont allégées dans le navigateur avant l’envoi). Variables d’environnement Vercel : `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, et si besoin `SMTP_HOST`, `SMTP_PORT`.

## Technique

- [Astro](https://astro.build) (site statique), hébergé sur Vercel
- Polices auto-hébergées : Saira (titres) et Source Sans 3 (texte)
- Coordonnées et mentions légales : `src/config.ts`

## Remplacer le film d'ouverture

Remplacer `public/video/skysolus-intro-v6.mp4` (MP4 H.264, 1280 à 1920 px de large, idéalement moins de 8 Mo), sa version mobile `skysolus-intro-mobile-v6.mp4` et `public/video/poster.jpg` (image affichée avant la lecture). **Changer le numéro de version du nom de fichier** (v7, v8…) à chaque nouveau film, et dans `src/pages/index.astro` : les navigateurs gardent les vidéos 7 jours en cache.

## Commandes

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Mise en ligne sur Vercel

Sur vercel.com : *Add New → Project*, importer le dépôt `johanncoisy-bit/skysolus`. Vercel détecte Astro automatiquement : chaque push sur `main` met le site à jour.

## SEO

- Une page par prestation (`/prestations/...`), générée depuis `src/prestations.ts` (titre, description, FAQ).
- Données structurées : entreprise (ProfessionalService), service, FAQ, fil d'Ariane.
- `sitemap-index.xml` généré au build, `robots.txt`, image de partage `public/og.jpg`.

Après la mise en ligne :
1. Google Search Console : ajouter le domaine et soumettre `https://<domaine>/sitemap-index.xml`.
2. Créer la fiche Google Business Profile « Sky Solus » (Hyères), catégorie « Service de photographie aérienne » ou équivalent, avec le lien du site.
3. Inscrire la société sur Pages Jaunes et les annuaires de télépilotes, avec exactement le même nom, la même adresse et le même téléphone.
4. Ajouter des photos de missions réelles au fil de l'eau : c'est ce qui fera la différence.

### Référencement national

- 13 pages régionales (`/france/...`) et une page « Partout en France », générées depuis `src/regions.ts`.
- 9 articles de conseil dans `src/pages/actualites/` : en publier un nouveau par mois aide à remonter durablement.
- Clé IndexNow (Bing, Yandex) : `public/4f888b60fcbfc098716017bc34f10a17.txt`. Dans Bing Webmaster Tools, importer le site depuis Google Search Console.
