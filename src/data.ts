export type Appareil = 'XL8' | 'M4T' | 'Mini';

export const APPAREILS: Record<Appareil, string> = {
  XL8: 'Bristell XL8',
  M4T: 'Matrice 4T',
  Mini: 'Mini 5 Pro',
};

export const prestations: {
  id: string;
  titre: string;
  texte: string;
  exemples: string[];
  avec: Appareil[];
}[] = [
  {
    id: 'image',
    titre: 'Photo et vidéo aériennes',
    texte: 'Des images pour présenter un lieu, une entreprise ou un bien, et le replacer dans son environnement.',
    exemples: ['Films d’entreprise et de tourisme', 'Biens immobiliers, domaines, terrains', 'Hôtels, campings, ports, sites touristiques'],
    avec: ['Mini', 'M4T'],
  },
  {
    id: 'batiment',
    titre: 'Toitures, façades et patrimoine',
    texte: 'Voir de près ce qui est difficile d’accès, sans échafaudage ni nacelle pour un premier diagnostic.',
    exemples: ['Tuiles, couvertures, zinguerie, gouttières', 'Fissures et dégradations apparentes', 'Comparaison avant / après travaux'],
    avec: ['M4T', 'Mini'],
  },
  {
    id: 'thermo',
    titre: 'Thermographie infrarouge',
    texte: 'Repérer les anomalies thermiques visibles, avec un rapport qui précise clairement les limites d’interprétation.',
    exemples: ['Centrales et toitures photovoltaïques', 'Enveloppe des bâtiments', 'Équipements techniques et installations'],
    avec: ['M4T'],
  },
  {
    id: 'chantier',
    titre: 'Suivi de chantier, cartographie et 3D',
    texte: 'Documenter l’avancement d’un chantier et produire des données mesurables, selon la précision demandée.',
    exemples: ['Prises de vues périodiques d’avancement', 'Orthophotos et modèles 3D par photogrammétrie', 'Surfaces, cubatures, suivi de stocks'],
    avec: ['M4T', 'Mini'],
  },
  {
    id: 'industrie',
    titre: 'Inspection industrielle et infrastructures',
    texte: 'Préparer une maintenance en repérant à distance les zones à examiner de plus près.',
    exemples: ['Ponts, ouvrages d’art, pylônes', 'Silos, réservoirs, charpentes', 'Toitures et façades industrielles'],
    avec: ['M4T'],
  },
  {
    id: 'surveillance',
    titre: 'Surveillance et reconnaissance aériennes',
    texte: 'L’ULM couvre de grandes distances en une sortie ; le drone prend le relais pour le détail.',
    exemples: ['Grands sites privés ou industriels', 'Littoral, massifs forestiers, territoires étendus', 'Reconnaissance après tempête ou sinistre'],
    avec: ['XL8', 'M4T'],
  },
  {
    id: 'environnement',
    titre: 'Environnement et littoral',
    texte: 'Suivre l’évolution d’un site dans le temps, sans déranger la faune ni entrer dans les zones protégées.',
    exemples: ['Érosion côtière, dunes, berges', 'Zones humides et espaces naturels', 'Dégâts après intempéries'],
    avec: ['XL8', 'Mini', 'M4T'],
  },
  {
    id: 'agri',
    titre: 'Agriculture et viticulture',
    texte: 'Observer des parcelles d’en haut pour suivre les cultures et repérer les différences visibles.',
    exemples: ['Suivi de la vigne et des cultures', 'Cartographie de parcelles', 'Vergers, haies, irrigation'],
    avec: ['Mini', 'M4T'],
  },
  {
    id: 'mer',
    titre: 'Ports, nautisme et événements',
    texte: 'Valoriser un port, un bateau ou une manifestation, quand le survol et la sécurité du public le permettent.',
    exemples: ['Marinas, chantiers navals, yachts', 'Régates et compétitions', 'Mariages et événements de plein air'],
    avec: ['Mini'],
  },
];

export const clients: [string, string][] = [
  ['Particuliers', 'Photos de propriété, souvenirs, état d’une toiture.'],
  ['Agences immobilières et promoteurs', 'Photos et vidéos de biens, terrains et programmes.'],
  ['Couvreurs, artisans et syndics', 'Inspection de toitures, façades, gouttières, suivi d’interventions.'],
  ['BTP, architectes, bureaux d’études', 'Suivi de chantier, orthophotos, volumes, modèles 3D.'],
  ['Agriculteurs et viticulteurs', 'Observation et cartographie de parcelles.'],
  ['Industriels et énergéticiens', 'Inspection visuelle, thermographie, documentation technique.'],
  ['Collectivités et offices de tourisme', 'Patrimoine, littoral, environnement, communication.'],
  ['Ports, marinas, organisateurs d’événements', 'Images promotionnelles, captation, reportages.'],
];

export const methode: [string, string][] = [
  ['Comprendre votre besoin', 'Ce que vous voulez voir, mesurer ou montrer, et sous quelle forme vous le voulez.'],
  ['Étudier le site', 'Espace aérien, zones réglementées, contraintes locales, accès.'],
  ['Choisir l’appareil et le cadre', 'Drone ou ULM, capteurs, assurance, catégorie d’opération et autorisations.'],
  ['Préparer la mission', 'Plan de vol, mesures de sécurité, date selon la météo.'],
  ['Voler', 'Réalisation dans les conditions autorisées.'],
  ['Livrer', 'Images ou données triées et traitées, avec leurs limites techniques précisées.'],
];

export const typesMission = [
  'Photo / vidéo aérienne',
  'Inspection toiture / bâtiment',
  'Thermographie',
  'Suivi de chantier / cartographie',
  'Inspection industrielle',
  'Surveillance aérienne (ULM)',
  'Environnement / littoral',
  'Agriculture / viticulture',
  'Événement',
  'Autre',
];
