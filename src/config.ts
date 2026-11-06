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

  // Mentions légales — À COMPLÉTER
  legal: {
    raisonSociale: 'Skysolus — Johann Coisy',
    statut: 'À COMPLÉTER (EI, SASU…)',
    siret: 'À COMPLÉTER',
    adresse: 'À COMPLÉTER, 83400 Hyères',
    exploitantUAS: 'À COMPLÉTER (n° d’enregistrement exploitant drone)',
    hebergeur: 'Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
  },
};
