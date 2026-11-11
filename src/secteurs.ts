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
    texte: 'Vendre ou louer un bien, vérifier l’état d’une toiture, suivre la construction de sa maison.',
    besoins: ['Photos et vidéos d’une maison ou d’un terrain à vendre', 'Observation d’une toiture avant d’appeler un couvreur', 'Images de l’avancement d’une construction'],
    prestations: ['immobilier', 'inspection', 'thermographie', 'chantier'],
  },
  {
    id: 'btp',
    titre: 'Bâtiment et travaux publics',
    texte: 'Suivre un chantier, documenter l’état d’un bâtiment ou d’un ouvrage, préparer une intervention en hauteur.',
    besoins: ['Prises de vues régulières de l’avancement', 'Observation de toitures, façades et ouvrages', 'Repérage d’écarts de température sur une enveloppe de bâtiment'],
    prestations: ['chantier', 'inspection', 'thermographie'],
  },
  {
    id: 'industrie',
    titre: 'Industrie et maintenance',
    texte: 'Observer des charpentes, cheminées, conduites, réservoirs ou installations techniques pour préparer une maintenance.',
    besoins: ['Images détaillées de zones difficiles d’accès', 'État visuel d’une installation à une date donnée', 'Repérage d’échauffements anormaux sur certains équipements'],
    prestations: ['inspection', 'thermographie'],
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
    texte: 'Suivre des travaux, observer l’état d’un pont, d’un bâtiment communal ou d’une toiture, garder une trace d’un projet.',
    besoins: ['Suivi de chantiers publics', 'Observation d’ouvrages d’art et de bâtiments communaux', 'Thermographie de bâtiments publics'],
    prestations: ['chantier', 'inspection', 'thermographie'],
  },
  {
    id: 'agriculture',
    titre: 'Agriculture et environnement',
    texte: 'Observation des cultures, suivi des parcelles, agriculture de précision : une offre en préparation.',
    besoins: [],
    prestations: ['agriculture'],
    enDeveloppement: true,
  },
];

export const secteurParId = (id: string) => secteurs.find((s) => s.id === id)!;
