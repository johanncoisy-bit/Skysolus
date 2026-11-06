// Coordonnées et réglages du site — à compléter par Johann.
// Les valeurs marquées « À COMPLÉTER » sont des exemples à remplacer.

export const SITE = {
  name: 'Skysolus',
  baseline: 'Drone & aircraft services',
  url: 'https://www.skysolus.fr', // À COMPLÉTER : nom de domaine définitif
  ville: 'Hyères',
  departement: 'Var (83)',

  contact: {
    nom: 'Johann Coisy',
    telephone: '+33 6 00 00 00 00', // À COMPLÉTER
    email: 'contact@skysolus.fr', // À COMPLÉTER
    whatsapp: '33600000000', // À COMPLÉTER : numéro au format international, sans + ni espaces
  },

  // Formulaire de devis :
  // - laissez vide pour que le formulaire ouvre la messagerie du visiteur (mailto), sans service externe ;
  // - ou collez l'URL d'un service de formulaire (ex. Formspree : https://formspree.io/f/xxxxxx).
  formEndpoint: '',

  // Informations légales (source : Registre national des entreprises / INSEE, consulté le 06/11/2026)
  legal: {
    denomination: 'SKYSOLUS',
    forme: 'Société par actions simplifiée (SAS)',
    capital: 'À COMPLÉTER', // montant du capital social indiqué dans les statuts
    siren: '130 316 011',
    siret: '130 316 011 00019',
    rcs: 'RCS Toulon 130 316 011', // greffe compétent pour Hyères : à vérifier sur le Kbis
    tva: 'FR21 130 316 011', // numéro calculé à partir du SIREN : à confirmer sur le Kbis ou l’avis d’imposition
    ape: '71.20B : analyses, essais et inspections techniques',
    adresse: '112 chemin de Beauvallon Bas, 83400 Hyères',
    president: 'Johann Coisy',
    dateCreation: '15 septembre 2026',
    exploitantUAS: 'À COMPLÉTER', // n° d’enregistrement exploitant UAS (AlphaTango)
    mediateur: 'À COMPLÉTER', // médiateur de la consommation (obligatoire pour la clientèle de particuliers)
    hebergeur: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis : vercel.com',
  },
};
