// Prestations de Sky Solus, selon la trame du cahier des charges (novembre 2026) :
// 1. Qu'est-ce que c'est ?  2. À quoi ça sert ?  3. Pour qui ?  4. Exemples d'applications
// 5. L'intervention de Sky Solus  6. Limites et précautions  7. Appel à l'action
//
// statut 'preparation' : affichée avec la mention « En développement », sans être présentée comme disponible.
import type { Appareil } from './data';

export interface Prestation {
  id: string;
  slug: string; // URL : /prestations/<slug>
  titre: string;
  court: string; // titre court (menus, cartes, formulaire)
  statut: 'disponible' | 'preparation';
  resume: string; // une phrase pour les cartes
  seoTitle: string; // balise <title>
  seoDescription: string; // meta description
  accroche: string; // texte de présentation du cahier des charges
  quoi: string[];
  aQuoi: string[];
  pourQui: string[];
  exemples: [string, string][];
  intervention: string[];
  livrables: string[];
  limites: string[];
  avec: Appareil[];
  secteurs: string[]; // ids de secteurs.ts
  cta: { texte: string; secondaire?: [string, string] };
  faq: [string, string][];
}

export const prestations: Prestation[] = [
  {
    id: 'immobilier',
    slug: 'photo-video-aerienne-immobilier',
    titre: 'Immobilier : photographie et vidéo aériennes',
    court: 'Immobilier',
    statut: 'disponible',
    resume: 'Des photos et vidéos aériennes qui montrent les extérieurs et l’environnement d’un bien, pour aider acheteurs et locataires à se projeter.',
    seoTitle: 'Photo et vidéo aériennes par drone pour l’immobilier · Sky Solus',
    seoDescription: 'Photos et vidéos aériennes par drone de maisons, terrains et locaux professionnels, pour les particuliers et les agences immobilières, depuis Hyères (Var).',
    accroche: 'Avec Sky Solus, vos biens prennent de la hauteur pour révéler tout leur potentiel. Nous réalisons des photos et vidéos aériennes qui mettent en valeur l’environnement, les extérieurs et le cadre de votre bien, pour aider les acheteurs ou locataires à mieux se projeter.',
    quoi: [
      'Des prises de vues réalisées par drone, à quelques dizaines de mètres de hauteur, qui montrent un bien dans son ensemble : la maison et son terrain, les accès, les abords et l’environnement proche.',
      'Le périmètre actuel porte sur les prises de vues extérieures.',
    ],
    aQuoi: [
      'Montrer la taille d’un terrain, l’implantation d’une maison ou l’organisation d’une propriété.',
      'Situer un bien par rapport à la mer, à un village, aux commerces ou aux accès.',
      'Compléter les photos prises au sol dans une annonce, une brochure ou une présentation en ligne.',
      'Donner une vue d’ensemble d’un terrain à bâtir ou d’une parcelle.',
    ],
    pourQui: [
      'Particuliers qui vendent ou louent leur bien',
      'Agences immobilières et professionnels de l’immobilier',
      'Propriétaires et gestionnaires de biens',
    ],
    exemples: [
      ['Maisons et propriétés', 'La maison, le jardin, la piscine et leurs abords, vus dans leur ensemble.'],
      ['Terrains et parcelles', 'L’étendue d’un terrain, ses accès et son voisinage.'],
      ['Biens et locaux professionnels', 'Bâtiments d’activité, commerces ou entrepôts, avec leurs abords et leurs accès.'],
      ['Environnement du bien', 'Des vues qui situent le bien : littoral, village, collines, axes de circulation.'],
    ],
    intervention: [
      'Vérification de l’adresse et des règles de vol applicables, avant tout devis.',
      'Prises de vues photo et vidéo à une heure choisie pour la lumière, selon la météo.',
      'Sélection et retouche des images, montage vidéo si vous le souhaitez.',
      'Livraison dans des formats adaptés aux annonces, au web et aux réseaux sociaux.',
    ],
    livrables: ['Photos retouchées, prêtes pour une annonce', 'Vidéo montée, au format web et réseaux sociaux', 'Fichiers bruts sur demande'],
    limites: [
      'Les prises de vues sont extérieures : la photographie d’intérieur n’est pas proposée.',
      'En agglomération, certains vols demandent une autorisation particulière ou ne sont pas possibles. Chaque adresse est vérifiée avant le devis.',
      'Le vol dépend de la météo : en cas de vent fort ou de pluie, il est reporté.',
      'Les voisins et les personnes présentes ne doivent pas être reconnaissables sur les images sans leur accord.',
    ],
    avec: ['Mini', 'M4T'],
    secteurs: ['particuliers-immobilier'],
    cta: { texte: 'Demander un devis', secondaire: ['Voir des exemples', '/realisations#immobilier'] },
    faq: [
      ['Peut-on survoler une maison en ville ?', 'Le vol en agglomération n’est pas possible dans le cadre le plus simple de la réglementation : il demande une démarche particulière, voire n’est pas autorisé selon le lieu. Nous vérifions chaque adresse avant de vous proposer un devis.'],
      ['Combien de temps faut-il pour recevoir les images ?', 'Le délai dépend du nombre d’images et du montage demandé. Il est indiqué dans le devis.'],
      ['Que se passe-t-il s’il pleut ou s’il y a trop de vent ?', 'Le vol est reporté à une date compatible avec la météo, sans frais supplémentaires.'],
    ],
  },
  {
    id: 'inspection',
    slug: 'inspection-visuelle-technique-drone',
    titre: 'Inspection visuelle et technique',
    court: 'Inspection',
    statut: 'disponible',
    resume: 'Observer des zones difficiles d’accès, repérer d’éventuelles anomalies visibles et obtenir des images utiles à la maintenance.',
    seoTitle: 'Inspection visuelle et technique par drone · Sky Solus (Var)',
    seoDescription: 'Inspection visuelle par drone d’éoliennes, pylônes, ouvrages d’art, sites industriels, toitures et panneaux solaires : des images pour préparer la maintenance.',
    accroche: 'L’inspection visuelle et technique par drone permet d’observer des zones difficiles d’accès, de repérer d’éventuelles anomalies visibles et d’obtenir des images utiles à la maintenance ou au contrôle de l’état d’une structure.',
    quoi: [
      'Le drone photographie et filme de près une structure ou un équipement, sans qu’il soit nécessaire de monter dessus ni d’installer un échafaudage ou une nacelle.',
      'Le DJI Matrice 4T, utilisé pour ces missions, dispose d’un zoom : il permet d’observer un détail à distance, en restant à l’écart de la structure.',
    ],
    aQuoi: [
      'Accéder visuellement à certaines zones difficiles d’approche.',
      'Obtenir des photographies et des vidéos détaillées.',
      'Constituer un état visuel à une date donnée.',
      'Aider à préparer une intervention de maintenance ou un contrôle complémentaire.',
    ],
    pourQui: [
      'Propriétaires, syndics et gestionnaires de bâtiments',
      'Couvreurs, artisans et entreprises de maintenance',
      'Exploitants d’éoliennes, de centrales solaires et d’infrastructures',
      'Industriels',
      'Collectivités et gestionnaires d’ouvrages',
    ],
    exemples: [
      ['Éoliennes', 'Observation des pales, du mât et de certaines parties extérieures. Les images peuvent aider à repérer des dégradations visibles : impacts, fissures apparentes, érosion ou traces d’usure.'],
      ['Antennes et pylônes', 'Observation des antennes, fixations, câbles et éléments extérieurs de structure, selon les conditions d’accès et de vol.'],
      ['Ouvrages d’art', 'Ponts, viaducs et passerelles : recherche visuelle de fissures apparentes, éclats de béton, traces d’infiltration ou corrosion visible. Les images peuvent contribuer au suivi de l’état de l’ouvrage.'],
      ['Sites industriels', 'Observation de charpentes, cheminées, conduites, réservoirs et installations techniques, lorsque l’environnement et les règles applicables permettent l’intervention.'],
      ['Bâtiments et toitures', 'Observation des couvertures, façades, gouttières, cheminées et autres éléments extérieurs. Recherche de désordres visibles, comme des tuiles déplacées ou des dégradations apparentes.'],
      ['Panneaux photovoltaïques', 'Inspection visuelle des modules et de leur environnement. Une recherche d’anomalies thermiques nécessite une caméra adaptée, un protocole pertinent et des conditions de mesure appropriées : voir la thermographie aérienne.'],
      ['Lignes électriques et infrastructures', 'Observation visuelle de certains supports et équipements, uniquement lorsque les conditions de sécurité, les distances et les autorisations applicables le permettent.'],
    ],
    intervention: [
      'Analyse du besoin : ce qu’il faut voir, et avec quel niveau de détail.',
      'Étude du site : espace aérien, distances de sécurité, consignes de l’exploitant, autorisations.',
      'Vol et prises de vues méthodiques des zones demandées.',
      'Tri des images et repérage des anomalies visibles.',
    ],
    livrables: ['Photos et vidéos détaillées', 'Vues zoomées des zones à examiner', 'Rapport photo avec la localisation des observations'],
    limites: [
      'Le drone fournit des images et des informations utiles à l’inspection, mais ne remplace pas systématiquement un diagnostic réglementaire ou spécialisé.',
      'Une anomalie non visible sur les images ne peut pas être exclue.',
      'Les observations portent sur les parties extérieures visibles depuis le drone.',
      'Près des lignes électriques, des éoliennes ou des sites industriels, l’intervention dépend des distances de sécurité, des consignes de l’exploitant et des autorisations applicables.',
    ],
    avec: ['M4T', 'Mini'],
    secteurs: ['btp', 'industrie', 'energie', 'telecom', 'collectivites', 'particuliers-immobilier'],
    cta: { texte: 'Demander un devis' },
    faq: [
      ['Le drone remplace-t-il le diagnostic d’un couvreur ou d’un bureau de contrôle ?', 'Non. Il fournit des images pour repérer les zones à examiner ; le diagnostic reste celui du professionnel concerné.'],
      ['Faut-il arrêter l’installation pendant le vol ?', 'Pas forcément : cela dépend du site et des consignes de sécurité. Nous le définissons ensemble avant la mission.'],
      ['Faut-il être présent pendant le vol ?', 'Ce n’est pas toujours obligatoire, mais nous avons besoin d’un accès au site et de l’accord du propriétaire ou de l’exploitant.'],
    ],
  },
  {
    id: 'chantier',
    slug: 'suivi-chantier-drone',
    titre: 'Suivi de chantier',
    court: 'Suivi de chantier',
    statut: 'disponible',
    resume: 'Des prises de vues aériennes régulières pour suivre l’évolution d’un projet, faciliter la communication et garder une trace de l’avancée.',
    seoTitle: 'Suivi de chantier par drone · prises de vues régulières · Sky Solus',
    seoDescription: 'Photos et vidéos aériennes régulières d’un chantier par drone : vue d’ensemble, historique visuel daté et supports de communication, dans le Var et en PACA.',
    accroche: 'Sky Solus accompagne vos chantiers avec des prises de vues aériennes régulières, pour suivre l’évolution du projet, faciliter la communication entre les équipes et garder une trace visuelle claire de l’avancée.',
    quoi: [
      'Le chantier est photographié et filmé depuis les airs à intervalles réguliers, si possible depuis les mêmes points de vue.',
      'Mises bout à bout, ces images montrent l’évolution des travaux, du terrassement à la livraison.',
    ],
    aQuoi: [
      'Avoir une vue d’ensemble de l’avancement des travaux.',
      'Faciliter la communication entre les équipes, le maître d’ouvrage et les partenaires.',
      'Constituer un historique visuel daté du chantier.',
      'Disposer d’images pour présenter le projet.',
    ],
    pourQui: [
      'Entreprises du bâtiment et des travaux publics',
      'Maîtres d’ouvrage et promoteurs',
      'Architectes et maîtres d’œuvre',
      'Collectivités qui conduisent des travaux',
      'Particuliers qui font construire',
    ],
    exemples: [
      ['Photographies régulières', 'Une série de vues prises aux mêmes endroits à chaque passage.'],
      ['Vue d’ensemble', 'Des images qui montrent tout le chantier et son environnement.'],
      ['Historique visuel', 'Un archivage daté, utile pour les réunions et la mémoire du projet.'],
      ['Supports de communication', 'Des photos et vidéos pour les équipes, les clients ou les partenaires.'],
    ],
    intervention: [
      'Définition avec vous de la fréquence et des points de vue.',
      'Vérification des contraintes du site : grues, personnel au sol, espace aérien.',
      'Prises de vues à chaque passage, dans des conditions comparables.',
      'Livraison des images datées et classées par passage.',
    ],
    livrables: ['Photos datées, classées par passage', 'Vidéo de survol', 'Montage de l’évolution du chantier sur demande'],
    limites: [
      'Les modalités et la fréquence des prises de vues sont à définir selon le chantier et les contraintes du site.',
      'Le vol à proximité des personnes qui travaillent sur le chantier est encadré : il est préparé avec le responsable du chantier.',
      'Les images documentent l’avancement : elles ne constituent ni un relevé topographique ni un contrôle de conformité des travaux.',
    ],
    avec: ['Mini', 'M4T'],
    secteurs: ['btp', 'collectivites', 'particuliers-immobilier'],
    cta: { texte: 'Parler de votre projet' },
    faq: [
      ['À quelle fréquence venir sur le chantier ?', 'Chaque semaine, chaque mois ou à chaque étape clé : le rythme se cale sur votre planning et sur les contraintes du site.'],
      ['Les images sont-elles datées ?', 'Oui : chaque série est datée et classée par passage, pour constituer un historique du chantier.'],
    ],
  },
  {
    id: 'thermographie',
    slug: 'thermographie-aerienne-drone',
    titre: 'Thermographie aérienne',
    court: 'Thermographie',
    statut: 'disponible',
    resume: 'Mesurer les températures de surface avec une caméra thermique pour repérer certaines anomalies sur des bâtiments, des panneaux solaires ou des équipements.',
    seoTitle: 'Thermographie aérienne par drone : bâtiments, photovoltaïque · Sky Solus',
    seoDescription: 'Thermographie par drone avec caméra thermique : repérage d’anomalies thermiques sur bâtiments, panneaux photovoltaïques et équipements, avec ses limites expliquées.',
    accroche: 'La thermographie consiste à mesurer les températures de surface à l’aide d’une caméra thermique. Les différences de température sont représentées sous forme d’images, souvent avec une palette de couleurs.',
    quoi: [
      'Embarquée sur un drone, la caméra thermique observe une toiture, une façade ou une installation entière, y compris des zones difficiles d’accès.',
      'Chaque image thermique est associée à une image visible de la même zone, pour situer précisément ce que l’on observe.',
    ],
    aQuoi: [
      'Repérer certaines anomalies thermiques sur des bâtiments.',
      'Orienter la recherche de défauts d’isolation, dans des conditions adaptées.',
      'Repérer des échauffements anormaux sur certains équipements, comme des panneaux photovoltaïques.',
      'Contribuer à l’examen de certaines installations techniques.',
    ],
    pourQui: [
      'Propriétaires et gestionnaires de bâtiments',
      'Entreprises et industriels',
      'Exploitants d’installations photovoltaïques',
      'Collectivités',
    ],
    exemples: [
      ['Bâtiments', 'Repérage d’écarts de température sur les toitures et les façades, pour orienter la recherche de défauts d’isolation.'],
      ['Panneaux photovoltaïques', 'Repérage de modules ou de cellules qui chauffent anormalement, pendant que l’installation produit.'],
      ['Équipements techniques', 'Repérage d’échauffements anormaux sur certaines installations, quand l’accès et la sécurité le permettent.'],
    ],
    intervention: [
      'Choix du moment de la mesure : saison, heure, météo, ensoleillement.',
      'Prises de vues thermiques et visibles associées, avec le DJI Matrice 4T.',
      'Repérage des écarts de température sur les images.',
      'Rapport qui présente les observations et leurs limites d’interprétation.',
    ],
    livrables: ['Images thermiques et visibles associées', 'Repérage des anomalies sur une vue d’ensemble', 'Rapport avec limites d’interprétation'],
    limites: [
      'Une image thermique montre des températures apparentes et des écarts de température. Elle ne constitue pas automatiquement un diagnostic de cause.',
      'Les résultats dépendent notamment des conditions météo, des matériaux, des réglages de la caméra, de l’émissivité (la capacité d’une surface à émettre de la chaleur, qui varie selon le matériau) et du protocole de mesure.',
      'Toute interprétation doit tenir compte de ces facteurs. Le rapport aide à orienter les vérifications des professionnels concernés.',
    ],
    avec: ['M4T'],
    secteurs: ['energie', 'industrie', 'btp', 'collectivites', 'particuliers-immobilier'],
    cta: { texte: 'Demander un devis' },
    faq: [
      ['Quand faire une thermographie de panneaux solaires ?', 'Par temps clair, avec un ensoleillement suffisant et pendant que les panneaux produisent : c’est dans ces conditions que les écarts de température apparaissent.'],
      ['Et pour un bâtiment ?', 'Il faut un écart de température suffisant entre l’intérieur et l’extérieur : en général en saison froide, tôt le matin ou en soirée.'],
      ['Le rapport a-t-il la valeur d’une expertise ?', 'Non. C’est un document d’aide au diagnostic, qui oriente les vérifications des professionnels concernés.'],
    ],
  },
  {
    id: 'agriculture',
    slug: 'agriculture-environnement-drone',
    titre: 'Agriculture et environnement',
    court: 'Agriculture et environnement',
    statut: 'preparation',
    resume: 'Observation des cultures, suivi des parcelles et agriculture de précision : une nouvelle expertise en préparation.',
    seoTitle: 'Agriculture et environnement par drone : en préparation · Sky Solus',
    seoDescription: 'Sky Solus étudie des solutions aériennes pour l’agriculture et l’environnement : observation des cultures, suivi des parcelles, agriculture de précision.',
    accroche: 'Sky Solus étudie le développement de solutions aériennes dédiées au monde agricole et à l’environnement : observation des cultures, suivi des parcelles et agriculture de précision.',
    quoi: [
      'L’agriculture de précision consiste à adapter le travail des cultures (irrigation, traitements, fertilisation) aux différences observées à l’intérieur d’une même parcelle. Les images aériennes aident à repérer ces différences.',
      'Ces possibilités seront proposées comme prestations une fois validés les équipements, les compétences, les méthodes, les autorisations et les conditions de réalisation.',
    ],
    aQuoi: [], pourQui: [], exemples: [], intervention: [], livrables: [], limites: [],
    avec: [],
    secteurs: ['agriculture'],
    cta: { texte: 'Parler de votre projet' },
    faq: [],
  },
];

export const disponibles = prestations.filter((p) => p.statut === 'disponible');
export const prestationParId = (id: string) => prestations.find((p) => p.id === id)!;
export const urlPrestation = (id: string) => `/prestations/${prestationParId(id).slug}`;

// Applications étudiées au cas par cas, sans page dédiée ni promesse (cahier des charges, § 2)
export const autresApplications: [string, string][] = [
  ['Surveillance et observation en ULM', 'Observer de grandes étendues en une sortie : littoral, massifs forestiers, grands sites.'],
  ['Cartographie et modélisation 3D', 'Orthophotos (images aériennes assemblées et redressées comme un plan) et modèles 3D, selon la précision recherchée.'],
  ['Photo et vidéo de communication', 'Images pour les entreprises, le tourisme, les ports ou les événements de plein air.'],
  ['Documentation après intempéries', 'Images des dégâts après une tempête ou une inondation, lorsque l’accès à l’espace aérien est autorisé.'],
];
