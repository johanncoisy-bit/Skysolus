// Contenus des pages Moyens aériens, L'esprit Skysolus, Zones et Réalisations.
import type { Appareil } from './data';

// Moyens aériens réellement disponibles (confirmé par Johann, novembre 2026).
// N'ajouter un appareil ou un capteur qu'une fois acquis et opérationnel.
export const moyens: {
  id: string;
  code: Appareil;
  nom: string;
  type: string;
  resume: string;
  capteurs: string[];
  usages: string[];
  limites: string[];
  prestations: string[]; // ids de prestations.ts ; vide = « autres applications »
}[] = [
  {
    id: 'mini',
    code: 'Mini',
    nom: 'DJI Mini 5 Pro',
    type: 'Drone compact photo et vidéo',
    resume: 'Un drone léger et discret, équipé d’une caméra à grand capteur, conçu pour la photo et la vidéo.',
    capteurs: ['Caméra photo et vidéo à grand capteur'],
    usages: [
      'Photographier et filmer des biens, des terrains et leur environnement',
      'Intervenir discrètement, avec un encombrement réduit',
      'Produire des images pour les annonces, le web et les réseaux sociaux',
    ],
    limites: [
      'Pas de caméra thermique',
      'Drone léger, plus sensible au vent qu’un drone professionnel',
      'Zoom limité : pour un détail, il faut s’approcher davantage',
    ],
    prestations: ['audiovisuel', 'chantier', 'inspection', 'specifiques'],
  },
  {
    id: 'm4t',
    code: 'M4T',
    nom: 'DJI Matrice 4T',
    type: 'Drone professionnel d’inspection',
    resume: 'Un drone de la gamme professionnelle de DJI. Il réunit dans une même nacelle une caméra grand-angle, des caméras zoom, une caméra thermique et un télémètre laser.',
    capteurs: ['Caméra grand-angle', 'Caméras zoom', 'Caméra thermique', 'Télémètre laser (mesure de distance)'],
    usages: [
      'Observer de loin, au zoom, des zones difficiles d’accès',
      'Repérer des écarts de température : bâtiments, panneaux solaires, équipements',
      'Mesurer une distance et localiser un point observé',
      'Réaliser des vols de cartographie et de modélisation 3D',
    ],
    limites: [
      'La caméra thermique a une résolution plus faible que les caméras visibles : pour un détail, il faut s’approcher',
      'Les mesures thermiques dépendent de la météo, de l’heure et des matériaux',
      'Près d’installations sensibles ou en agglomération, le vol dépend des autorisations applicables',
    ],
    prestations: ['inspection', 'thermographie', 'cartographie', 'chantier', 'surveillance', 'agriculture', 'audiovisuel', 'specifiques'],
  },
  {
    id: 'xl8',
    code: 'XL8',
    nom: 'ULM Bristell XL8',
    type: 'Avion ultraléger (ULM), biplace',
    resume: 'Un avion biplace à aile basse construit par BRM Aero. Sa grande verrière offre au pilote et à l’observateur une vue dégagée pour l’observation et la prise de vues.',
    capteurs: [],
    usages: [
      'Observer de grandes étendues en une sortie : littoral, massifs forestiers, grands sites',
      'Observer depuis une hauteur où le drone ne peut pas voler',
      'Embarquer un observateur',
    ],
    limites: [
      'Vol de jour, dans des conditions météo compatibles avec le vol à vue',
      'Hauteurs minimales de survol à respecter, notamment au-dessus des agglomérations : l’ULM ne remplace pas le drone pour l’observation rapprochée',
      'Missions préparées au cas par cas, selon l’espace aérien survolé',
    ],
    prestations: ['surveillance', 'agriculture'],
  },
];

// L'esprit Skysolus — texte du cahier des charges.
// À compléter avant publication par Johann : parcours aéronautique, expérience, qualifications.
// Ne rien ajouter qui ne soit pas confirmé (diplôme, certification, expérience).
export const esprit = {
  paragraphes: [
    'L’aéronautique fait partie de mon univers depuis mon plus jeune âge. Passionné par le monde aérien et l’aéromodélisme, j’ai naturellement souhaité concrétiser cette passion en obtenant ma licence de pilote avion en 2014.',
    'C’est dans cette continuité qu’est né Skysolus, avec l’ambition de mettre les possibilités offertes par les technologies aériennes au service des particuliers, des entreprises et des collectivités.',
  ],
  citation: 'Pour moi, un drone est d’abord un aéronef. Je l’aborde avec la même culture de sécurité, de rigueur et de respect de la réglementation que lorsque je pilote un avion. C’est cette approche qui guide chacune de mes interventions.',
  conclusion: 'Au-delà des technologies et des équipements, Skysolus repose sur une passion pour l’aérien, une volonté d’innover et le souci d’apporter des solutions adaptées aux besoins de chaque client.',
  engagements: [
    ['Un interlocuteur unique', 'Le même pilote prépare, réalise et livre votre mission.'],
    ['La réglementation d’abord', 'Aucun vol sans vérification de l’espace aérien et des autorisations nécessaires.'],
    ['Des limites expliquées', 'Ce que les images permettent de conclure, et ce qu’elles ne permettent pas, est écrit clairement.'],
    ['Un ancrage local', 'Basé à Hyères, Skysolus connaît le littoral varois et ses contraintes.'],
  ] as [string, string][],
};

export const zones: { slug: string; ville: string; title: string; description: string; intro: string; local: string; focus: string[] }[] = [
  {
    slug: 'hyeres',
    ville: 'Hyères',
    title: 'Drone et ULM à Hyères : immobilier, inspection · Skysolus',
    description: 'Skysolus est basé à Hyères : photo et vidéo aériennes pour l’immobilier, inspection et thermographie par drone, de Giens aux Salins.',
    intro: 'Hyères est la base de Skysolus. De la presqu’île de Giens aux Salins, du port Saint-Pierre aux collines de Costebelle, nous intervenons sur toute la commune.',
    local: 'La présence de l’aéroport de Toulon-Hyères impose des restrictions de vol pour les drones sur une partie de la commune, et les îles d’Or sont en grande partie en cœur de parc national. Chaque demande est vérifiée avant de vous proposer un devis.',
    focus: ['audiovisuel', 'inspection', 'thermographie'],
  },
  {
    slug: 'toulon',
    ville: 'Toulon',
    title: 'Drone à Toulon : inspection, suivi de chantier · Skysolus',
    description: 'Inspection de toitures et d’ouvrages, suivi de chantier et thermographie par drone à Toulon et dans la métropole Toulon Provence Méditerranée.',
    intro: 'Dans la métropole toulonnaise, Skysolus accompagne les syndics, les entreprises du BTP, les industriels et les collectivités, de La Seyne à La Valette.',
    local: 'Toulon compte de nombreuses zones où le vol de drone est restreint, notamment autour des installations militaires et en agglomération. Ces missions relèvent souvent de la catégorie Spécifique : nous nous occupons des démarches.',
    focus: ['inspection', 'chantier', 'thermographie'],
  },
  {
    slug: 'saint-tropez',
    ville: 'Saint-Tropez',
    title: 'Drone à Saint-Tropez et dans le golfe : immobilier, inspection',
    description: 'Photos et vidéos aériennes de biens immobiliers, inspection de toitures et suivi de chantier par drone à Saint-Tropez et dans le golfe, depuis Hyères.',
    intro: 'Villas, domaines, terrains et locaux professionnels : dans le golfe de Saint-Tropez, la vue aérienne montre un bien dans son cadre, entre mer et collines.',
    local: 'En saison, la fréquentation demande une préparation rigoureuse : pas de survol du public sans cadre autorisé, et des créneaux choisis pour la lumière comme pour la sécurité.',
    focus: ['audiovisuel', 'inspection', 'chantier'],
  },
  {
    slug: 'frejus-saint-raphael',
    ville: 'Fréjus et Saint-Raphaël',
    title: 'Drone à Fréjus et Saint-Raphaël : immobilier, chantier, inspection',
    description: 'Photos aériennes de biens immobiliers, suivi de chantier et inspection par drone à Fréjus, Saint-Raphaël et dans l’Estérel. Devis sur demande.',
    intro: 'Entre la mer et le massif de l’Estérel, Fréjus et Saint-Raphaël réunissent ports, plages, chantiers et espaces naturels sensibles.',
    local: 'Entre ports, plages et massif, certaines zones sont réglementées pour le vol de drone : chaque adresse est vérifiée sur les cartes officielles avant le devis.',
    focus: ['audiovisuel', 'chantier', 'inspection', 'surveillance'],
  },
  {
    slug: 'le-lavandou-bormes',
    ville: 'Le Lavandou et Bormes-les-Mimosas',
    title: 'Drone au Lavandou et à Bormes-les-Mimosas · Skysolus',
    description: 'Photo et vidéo aériennes de biens, inspection et thermographie de toitures par drone au Lavandou, à Bormes-les-Mimosas et sur la côte des Maures.',
    intro: 'Villages perchés, plages, ports de plaisance et collines des Maures : entre Bormes et Le Lavandou, la vue aérienne montre un bien dans son environnement.',
    local: 'Une zone interdite au survol entoure le fort de Brégançon, et d’autres secteurs sont réglementés : nous vérifions systématiquement les cartes officielles avant chaque vol.',
    focus: ['audiovisuel', 'inspection', 'thermographie'],
  },
  {
    slug: 'provence-verte',
    ville: 'Brignoles et la Provence verte',
    title: 'Drone en Provence verte : chantiers, cartographie, vignes',
    description: 'Suivi de chantier, cartographie et volumes, observation de vignes et de cultures, photos de domaines par drone à Brignoles et en Provence verte.',
    intro: 'Dans le centre Var, domaines, exploitations et chantiers : le drone apporte une vue d’ensemble et des images de suivi.',
    local: 'Les grandes propriétés, les carrières et les chantiers étendus se prêtent aux vues d’ensemble, à la cartographie et au calcul de volumes, avec une précision définie avant la mission.',
    focus: ['chantier', 'cartographie', 'agriculture', 'audiovisuel'],
  },
];

// Réalisations / galerie.
// N'utiliser que des images dont Skysolus détient les droits ou dont la publication est autorisée.
// Ne pas divulguer d'informations sensibles sur les sites inspectés.
// Pour ajouter une réalisation : déposer l'image dans public/realisations/ puis ajouter une entrée ici.
export const categoriesGalerie: [string, string][] = [
  ['immobilier', 'Immobilier'],
  ['inspection', 'Inspection technique'],
  ['chantier', 'Suivi de chantier'],
  ['thermographie', 'Thermographie'],
  ['autres', 'Autres réalisations'],
];

export const realisations: {
  categorie: 'immobilier' | 'inspection' | 'chantier' | 'thermographie' | 'autres';
  image: string; // ex. '/realisations/villa-hyeres.jpg'
  alt: string; // description de l'image pour les personnes qui ne la voient pas
  mission: string; // type de mission, ex. 'Photo aérienne d’une villa'
  objectif: string; // objectif des prises de vues
  lieu?: string; // seulement si publiable
}[] = [];
