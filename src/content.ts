// Contenus des pages Flotte, À propos, Zones et Réalisations.

export const flotte = [
  {
    id: 'xl8',
    nom: 'Bristell XL8',
    type: 'Avion ultraléger (ULM), biplace',
    resume: 'Un avion biplace à aile basse construit par BRM Aero. Sa grande verrière offre au pilote et à l’observateur une vue dégagée, idéale pour l’observation et la prise de vues.',
    pourquoi: [
      'Couvrir en une sortie de grandes distances : littoral, massifs forestiers, grandes emprises',
      'Observer depuis une hauteur où le drone ne peut pas voler',
      'Embarquer un observateur et du matériel de prise de vues',
    ],
    missions: ['surveillance', 'environnement'],
  },
  {
    id: 'm4t',
    nom: 'DJI Matrice 4T',
    type: 'Drone professionnel d’inspection',
    resume: 'Un drone de la gamme entreprise de DJI. Il réunit dans une même nacelle une caméra grand-angle, des caméras zoom, une caméra thermique et un télémètre laser.',
    pourquoi: [
      'Repérer les anomalies thermiques : photovoltaïque, toitures, équipements',
      'Inspecter de loin, au zoom, ce qui est difficile d’accès',
      'Mesurer des distances et localiser précisément un point',
    ],
    missions: ['thermo', 'batiment', 'industrie', 'chantier'],
  },
  {
    id: 'mini',
    nom: 'DJI Mini 5 Pro',
    type: 'Drone compact photo et vidéo',
    resume: 'Un drone léger et discret, doté d’un capteur grand format, pensé pour des photos et des vidéos de grande qualité.',
    pourquoi: [
      'Photographier et filmer des biens, des sites et des paysages',
      'Intervenir discrètement, avec un encombrement minimal',
      'Produire des images pour le web et les réseaux sociaux',
    ],
    missions: ['image', 'agri', 'mer'],
  },
];

export const aPropos = {
  // À COMPLÉTER par Johann : parcours, brevets et certificats, années de vol
  paragraphes: [
    'Skysolus a été fondée en 2026 à Hyères par Johann Coisy, pilote d’ULM et télépilote de drone.',
    'L’idée est simple : réunir sous un même toit l’avion ultraléger, qui voit grand, et le drone, qui voit de près. Une même entreprise peut ainsi survoler un littoral entier puis inspecter un toit au centimètre près.',
    'Chaque mission est préparée sérieusement : vérification de l’espace aérien, autorisations, météo, sécurité. Le client reçoit des images et des données exploitables, avec leurs limites clairement expliquées.',
  ],
  engagements: [
    ['Un interlocuteur unique', 'Le même pilote prépare, réalise et livre votre mission.'],
    ['La réglementation d’abord', 'Aucun vol sans vérification de l’espace aérien et des autorisations nécessaires.'],
    ['Des livrables honnêtes', 'Ce que les images permettent de conclure, et ce qu’elles ne permettent pas, est écrit noir sur blanc.'],
    ['Un ancrage local', 'Basé à Hyères, Skysolus connaît le littoral varois et ses contraintes.'],
  ],
};

export const zones = [
  {
    slug: 'hyeres',
    ville: 'Hyères',
    title: 'Drone et ULM à Hyères : prises de vues, inspection · Skysolus',
    description: 'Skysolus est basé à Hyères : photo et vidéo par drone, inspection de toitures, thermographie et surveillance aérienne, de Giens aux îles d’Or.',
    intro: 'Hyères est la base de Skysolus. De la presqu’île de Giens aux Salins, du port Saint-Pierre aux collines de Costebelle, nous intervenons rapidement sur toute la commune.',
    local: 'La présence de l’aéroport de Toulon-Hyères impose des restrictions de vol pour les drones sur une partie de la commune, et les îles d’Or sont en grande partie en cœur de parc national. Chaque demande est vérifiée avant de vous proposer un devis.',
    focus: ['image', 'batiment', 'mer', 'environnement'],
  },
  {
    slug: 'toulon',
    ville: 'Toulon',
    title: 'Drone à Toulon : inspection, suivi de chantier, photo · Skysolus',
    description: 'Inspection de toitures et d’ouvrages, suivi de chantier, thermographie et prises de vues par drone à Toulon et dans la métropole Toulon Provence Méditerranée.',
    intro: 'Dans la métropole toulonnaise, Skysolus accompagne les syndics, les entreprises du BTP, les industriels et les acteurs portuaires, de La Seyne à La Valette.',
    local: 'Toulon compte de nombreuses zones où le vol de drone est restreint, notamment autour des installations militaires et en agglomération. Ces missions relèvent souvent de la catégorie Spécifique : nous nous occupons des démarches.',
    focus: ['batiment', 'chantier', 'industrie', 'thermo'],
  },
  {
    slug: 'saint-tropez',
    ville: 'Saint-Tropez',
    title: 'Drone à Saint-Tropez et dans le golfe : photo, vidéo, nautisme',
    description: 'Photos et films aériens par drone à Saint-Tropez et dans le golfe : villas, domaines, hôtels, yachts et événements, avec un pilote basé dans le Var.',
    intro: 'Villas, domaines viticoles, hôtels, plages et yachts : dans le golfe de Saint-Tropez, l’image aérienne est souvent la meilleure façon de montrer un lieu d’exception.',
    local: 'En saison, la fréquentation et les événements nautiques demandent une préparation rigoureuse : pas de survol du public sans cadre autorisé, et des créneaux choisis pour la lumière comme pour la sécurité.',
    focus: ['image', 'mer', 'agri', 'batiment'],
  },
  {
    slug: 'frejus-saint-raphael',
    ville: 'Fréjus et Saint-Raphaël',
    title: 'Drone à Fréjus et Saint-Raphaël : littoral, chantier, photo',
    description: 'Prises de vues, inspection et suivi du littoral par drone et ULM à Fréjus, Saint-Raphaël et dans l’Estérel. Devis sur demande.',
    intro: 'Entre la mer et le massif de l’Estérel, Fréjus et Saint-Raphaël réunissent ports, plages, chantiers et espaces naturels sensibles.',
    local: 'L’ULM permet d’observer de grandes surfaces du massif et du littoral en une sortie ; le drone prend le relais pour le détail d’un bâtiment ou d’un chantier.',
    focus: ['environnement', 'surveillance', 'chantier', 'image'],
  },
  {
    slug: 'le-lavandou-bormes',
    ville: 'Le Lavandou et Bormes-les-Mimosas',
    title: 'Drone au Lavandou et à Bormes-les-Mimosas · Skysolus',
    description: 'Photo et vidéo aériennes, inspection de toitures et suivi du littoral par drone au Lavandou, à Bormes-les-Mimosas et sur la côte des Maures.',
    intro: 'Villages perchés, plages, ports de plaisance et collines des Maures : la côte entre Bormes et Le Lavandou se prête aux images aériennes comme au suivi du littoral.',
    local: 'Une zone interdite au survol entoure le fort de Brégançon, et d’autres secteurs sont réglementés : nous vérifions systématiquement les cartes officielles avant chaque vol.',
    focus: ['image', 'environnement', 'mer', 'batiment'],
  },
  {
    slug: 'provence-verte',
    ville: 'Brignoles et la Provence verte',
    title: 'Drone en Provence verte : vignes, carrières, chantiers',
    description: 'Observation de vignes et de cultures, suivi de carrières et de chantiers, photos de domaines par drone à Brignoles et en Provence verte.',
    intro: 'Dans le centre Var, vignobles, carrières, exploitations agricoles et chantiers trouvent dans le drone un outil de suivi simple et rapide.',
    local: 'Les grandes parcelles et les carrières se prêtent bien à la cartographie et au calcul de volumes, avec une précision définie avant la mission.',
    focus: ['agri', 'chantier', 'thermo', 'image'],
  },
];

// Réalisations : ajouter une entrée par mission terminée, avec ses images dans public/realisations/
export const realisations: {
  titre: string;
  lieu: string;
  date: string;
  prestation: string;
  texte: string;
  image: string;
}[] = [];
