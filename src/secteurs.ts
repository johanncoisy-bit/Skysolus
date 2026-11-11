// Secteurs d'activité : aident chaque visiteur à trouver les prestations qui le concernent.
// Chaque secteur renvoie vers ses prestations, et chaque prestation vers ses secteurs (prestations.ts).

export interface Secteur {
  id: string;
  titre: string;
  texte: string;
  besoins: string[];
  prestations: string[]; // ids de prestations.ts
  enDeveloppement?: boolean;
}

export const secteurs: Secteur[] = [
  {
    id: 'particuliers-immobilier',
    titre: 'Particuliers et immobilier',
    texte: 'Vendre ou louer un bien, vérifier l’état d’une toiture, suivre la construction de sa maison, localiser un nid de frelons.',
    besoins: ['Photos et vidéos d’une maison ou d’un terrain à vendre', 'Observation d’une toiture avant d’appeler un couvreur', 'Images de l’avancement d’une construction'],
    prestations: ['audiovisuel', 'inspection', 'thermographie', 'chantier', 'specifiques'],
  },
  {
    id: 'btp',
    titre: 'Bâtiment et travaux publics',
    texte: 'Suivre un chantier, mesurer des volumes, modéliser un site, documenter l’état d’un bâtiment ou d’un ouvrage.',
    besoins: ['Prises de vues régulières de l’avancement', 'Estimation de volumes de déblais et de remblais', 'Orthophoto et modèle 3D d’un site', 'Observation de toitures, façades et ouvrages'],
    prestations: ['chantier', 'cartographie', 'inspection', 'thermographie'],
  },
  {
    id: 'industrie',
    titre: 'Industrie et maintenance',
    texte: 'Observer des charpentes, cheminées, conduites, réservoirs ou installations techniques, cartographier et surveiller un site.',
    besoins: ['Images détaillées de zones difficiles d’accès', 'Repérage d’échauffements anormaux sur certains équipements', 'Plan aérien et modèle 3D d’un site', 'Rondes aériennes sur un site, avec l’accord de l’exploitant'],
    prestations: ['inspection', 'thermographie', 'cartographie', 'surveillance'],
  },
  {
    id: 'energie',
    titre: 'Énergie : éolien et photovoltaïque',
    texte: 'Observer les pales et le mât d’une éolienne, repérer des panneaux solaires endommagés ou qui chauffent anormalement.',
    besoins: ['Observation visuelle des pales et du mât', 'Inspection visuelle des modules photovoltaïques', 'Thermographie d’une installation photovoltaïque en production'],
    prestations: ['inspection', 'thermographie'],
  },
  {
    id: 'telecom',
    titre: 'Télécommunications et infrastructures',
    texte: 'Observer antennes, pylônes, fixations et câbles, ou certains supports de lignes, selon les conditions d’accès et de sécurité.',
    besoins: ['Observation d’antennes et de pylônes', 'Images des fixations et éléments de structure', 'Observation de certains supports et équipements de lignes'],
    prestations: ['inspection'],
  },
  {
    id: 'collectivites',
    titre: 'Collectivités',
    texte: 'Suivre des travaux, cartographier un territoire, observer un pont ou un bâtiment communal, surveiller des espaces naturels, valoriser une commune.',
    besoins: ['Suivi de chantiers publics', 'Cartographie et modélisation de sites', 'Observation d’ouvrages d’art et de bâtiments communaux', 'Surveillance d’espaces naturels et prévention', 'Films institutionnels'],
    prestations: ['chantier', 'cartographie', 'inspection', 'thermographie', 'surveillance', 'agriculture', 'audiovisuel', 'specifiques'],
  },
  {
    id: 'agriculture',
    titre: 'Agriculture et environnement',
    texte: 'Observer des parcelles et des cultures, cartographier une exploitation, suivre des espaces naturels.',
    besoins: ['Observation régulière des parcelles', 'Plan aérien et surfaces d’une exploitation', 'Suivi du littoral, des forêts et des zones naturelles'],
    prestations: ['agriculture', 'cartographie', 'surveillance'],
  },
  {
    id: 'tourisme',
    titre: 'Tourisme, entreprises et communication',
    texte: 'Présenter un hôtel, un camping, un domaine, une entreprise ou un site industriel, en photo et en vidéo.',
    besoins: ['Photos et vidéos pour un site internet et les réseaux sociaux', 'Films promotionnels et institutionnels', 'Reportages et événements de plein air'],
    prestations: ['audiovisuel'],
  },
];

export const secteurParId = (id: string) => secteurs.find((s) => s.id === id)!;
