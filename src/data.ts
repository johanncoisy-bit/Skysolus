// Données communes : appareils, déroulement d'une mission, types de besoin du formulaire.
// Les prestations sont dans prestations.ts, les secteurs dans secteurs.ts.

export type Appareil = 'XL8' | 'M4T' | 'Mini';

export const APPAREILS: Record<Appareil, string> = {
  XL8: 'ULM Bristell XL8',
  M4T: 'DJI Matrice 4T',
  Mini: 'DJI Mini 5 Pro',
};

export const methode: [string, string][] = [
  ['Comprendre votre besoin', 'Ce que vous voulez voir, suivre ou montrer, et sous quelle forme vous souhaitez le recevoir.'],
  ['Étudier le site', 'Espace aérien, zones réglementées, contraintes locales, accès.'],
  ['Choisir l’appareil et le cadre', 'Drone ou ULM, capteurs, assurance, catégorie d’opération et autorisations.'],
  ['Préparer la mission', 'Plan de vol, mesures de sécurité, date choisie selon la météo.'],
  ['Voler', 'Réalisation dans les conditions autorisées.'],
  ['Livrer', 'Images triées et traitées, avec leurs limites précisées.'],
];

// Liste « Type de besoin » du formulaire de contact : [identifiant, libellé].
// L'identifiant permet de présélectionner le besoin via un lien /contact?besoin=<identifiant>.
export const typesBesoin: [string, string][] = [
  ['immobilier', 'Immobilier : photo et vidéo aériennes'],
  ['inspection', 'Inspection visuelle et technique'],
  ['chantier', 'Suivi de chantier'],
  ['thermographie', 'Thermographie aérienne'],
  ['agriculture', 'Agriculture et environnement'],
  ['autre', 'Autre projet'],
];
