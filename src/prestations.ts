// Prestations de Skysolus.
// Liste et ordre : texte « Nos prestations par drone » de Johann (11 novembre 2026).
// Trame de chaque page (cahier des charges) :
// 1. Qu'est-ce que c'est ?  2. À quoi ça sert ?  3. Pour qui ?  4. Exemples d'applications
// 5. L'intervention de Skysolus  6. Limites et précautions  7. Appel à l'action
//
// statut 'preparation' : affichée avec la mention « En développement », sans être présentée comme disponible.
import type { Appareil } from './data';

export interface Prestation {
  id: string;
  slug: string; // URL : /prestations/<slug>
  titre: string;
  court: string; // titre court (cartes, formulaire, liens)
  statut: 'disponible' | 'preparation';
  liste: string[]; // liste du texte « Nos prestations par drone », affichée sur la carte et en tête de page
  resume: string; // une phrase (pages zones et régions)
  seoTitle: string; // balise <title>
  seoDescription: string; // meta description
  accroche: string;
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
    id: 'inspection',
    slug: 'inspection-visuelle-technique-drone',
    titre: 'Inspection technique et industrielle',
    court: 'Inspection technique',
    statut: 'disponible',
    liste: [
      'Inspection visuelle de bâtiments et de toitures',
      'Inspection d’ouvrages d’art et d’infrastructures',
      'Inspection d’éoliennes',
      'Inspection d’antennes et de pylônes',
      'Inspection de structures industrielles',
      'Contrôle visuel de zones difficiles d’accès',
    ],
    resume: 'Observer des zones difficiles d’accès, repérer d’éventuelles anomalies visibles et obtenir des images utiles à la maintenance.',
    seoTitle: 'Inspection technique et industrielle par drone · Skysolus (Var)',
    seoDescription: 'Inspection par drone de toitures, ouvrages d’art, éoliennes, antennes, pylônes et structures industrielles : des images pour préparer la maintenance.',
    accroche: 'L’inspection visuelle et technique par drone permet d’observer des zones difficiles d’accès, de repérer d’éventuelles anomalies visibles et d’obtenir des images utiles à la maintenance ou au contrôle de l’état d’une structure.',
    quoi: [
      'Le drone photographie et filme de près une structure ou un équipement, sans qu’il soit nécessaire de monter dessus ni d’installer un échafaudage ou une nacelle.',
      'Le DJI Matrice 4T, utilisé pour ces missions, dispose d’un zoom : il permet d’observer un détail à distance, en restant à l’écart de la structure.',
    ],
    aQuoi: [
      'Accéder visuellement à des zones difficiles d’approche.',
      'Obtenir des photographies et des vidéos détaillées.',
      'Constituer un état visuel à une date donnée.',
      'Aider à préparer une intervention de maintenance ou un contrôle complémentaire.',
    ],
    pourQui: [
      'Propriétaires, syndics et gestionnaires de bâtiments',
      'Couvreurs, artisans et entreprises de maintenance',
      'Exploitants d’éoliennes, de centrales solaires et d’infrastructures',
      'Opérateurs de télécommunications',
      'Industriels',
      'Collectivités et gestionnaires d’ouvrages',
    ],
    exemples: [
      ['Bâtiments et toitures', 'Observation des couvertures, façades, gouttières, cheminées et autres éléments extérieurs. Recherche de désordres visibles, comme des tuiles déplacées ou des dégradations apparentes.'],
      ['Ouvrages d’art et infrastructures', 'Ponts, viaducs et passerelles : recherche visuelle de fissures apparentes, éclats de béton, traces d’infiltration ou corrosion visible.'],
      ['Éoliennes', 'Observation des pales, du mât et de certaines parties extérieures : impacts, fissures apparentes, érosion ou traces d’usure.'],
      ['Antennes et pylônes', 'Observation des antennes, fixations, câbles et éléments extérieurs de structure, selon les conditions d’accès et de vol.'],
      ['Structures industrielles', 'Charpentes, cheminées, conduites, réservoirs et installations techniques, lorsque l’environnement et les règles applicables permettent l’intervention.'],
      ['Zones difficiles d’accès', 'Tout élément en hauteur ou hors de portée, pour savoir s’il faut y envoyer quelqu’un, et avec quel matériel.'],
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
    secteurs: ['particuliers-immobilier', 'btp', 'industrie', 'energie', 'telecom', 'collectivites'],
    cta: { texte: 'Demander un devis' },
    faq: [
      ['Le drone remplace-t-il le diagnostic d’un couvreur ou d’un bureau de contrôle ?', 'Non. Il fournit des images pour repérer les zones à examiner ; le diagnostic reste celui du professionnel concerné.'],
      ['Faut-il arrêter l’installation pendant le vol ?', 'Pas forcément : cela dépend du site et des consignes de sécurité. Nous le définissons ensemble avant la mission.'],
      ['Faut-il être présent pendant le vol ?', 'Ce n’est pas toujours obligatoire, mais nous avons besoin d’un accès au site et de l’accord du propriétaire ou de l’exploitant.'],
    ],
  },
  {
    id: 'thermographie',
    slug: 'thermographie-aerienne-drone',
    titre: 'Thermographie aérienne',
    court: 'Thermographie',
    statut: 'disponible',
    liste: [
      'Inspection thermique de panneaux photovoltaïques',
      'Détection d’anomalies et de points de surchauffe',
      'Analyse thermique de bâtiments et de toitures',
      'Recherche de déperditions thermiques',
      'Contrôle thermique d’installations industrielles',
    ],
    resume: 'Mesurer les températures de surface avec une caméra thermique pour repérer certaines anomalies sur des bâtiments, des panneaux solaires ou des équipements.',
    seoTitle: 'Thermographie aérienne par drone : photovoltaïque, bâtiments · Skysolus',
    seoDescription: 'Thermographie par drone : panneaux photovoltaïques, points de surchauffe, bâtiments, toitures, déperditions et installations industrielles, avec ses limites expliquées.',
    accroche: 'La thermographie consiste à mesurer les températures de surface à l’aide d’une caméra thermique. Les différences de température sont représentées sous forme d’images, souvent avec une palette de couleurs.',
    quoi: [
      'Embarquée sur un drone, la caméra thermique observe une toiture, une façade ou une installation entière, y compris des zones difficiles d’accès.',
      'Chaque image thermique est associée à une image visible de la même zone, pour situer précisément ce que l’on observe.',
    ],
    aQuoi: [
      'Repérer des modules photovoltaïques ou des cellules qui chauffent anormalement.',
      'Repérer des points de surchauffe sur certains équipements.',
      'Orienter la recherche de déperditions thermiques et de défauts d’isolation, dans des conditions adaptées.',
      'Contribuer à l’examen d’installations industrielles.',
    ],
    pourQui: [
      'Propriétaires et gestionnaires de bâtiments',
      'Exploitants et installateurs photovoltaïques',
      'Entreprises et industriels',
      'Collectivités',
    ],
    exemples: [
      ['Panneaux photovoltaïques', 'Repérage de modules ou de cellules qui chauffent anormalement, pendant que l’installation produit.'],
      ['Bâtiments et toitures', 'Repérage d’écarts de température sur les toitures et les façades, pour orienter la recherche de déperditions.'],
      ['Installations industrielles', 'Repérage d’échauffements anormaux sur certaines installations, quand l’accès et la sécurité le permettent.'],
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
      'Toute interprétation doit tenir compte de ces facteurs. Le rapport aide à orienter les vérifications des professionnels concernés ; il ne remplace pas un audit énergétique.',
    ],
    avec: ['M4T'],
    secteurs: ['particuliers-immobilier', 'btp', 'industrie', 'energie', 'collectivites'],
    cta: { texte: 'Demander un devis' },
    faq: [
      ['Quand faire une thermographie de panneaux solaires ?', 'Par temps clair, avec un ensoleillement suffisant et pendant que les panneaux produisent : c’est dans ces conditions que les écarts de température apparaissent.'],
      ['Et pour un bâtiment ?', 'Il faut un écart de température suffisant entre l’intérieur et l’extérieur : en général en saison froide, tôt le matin ou en soirée.'],
      ['Le rapport a-t-il la valeur d’une expertise ?', 'Non. C’est un document d’aide au diagnostic, qui oriente les vérifications des professionnels concernés.'],
    ],
  },
  {
    id: 'cartographie',
    slug: 'cartographie-modelisation-3d-drone',
    titre: 'Cartographie et modélisation 3D',
    court: 'Cartographie et 3D',
    statut: 'disponible',
    liste: [
      'Cartographie aérienne',
      'Photogrammétrie',
      'Modélisation 3D de bâtiments et de terrains',
      'Réalisation d’orthophotographies',
      'Relevés topographiques par drone, selon les besoins et la précision requise',
      'Modélisation de sites et d’infrastructures',
    ],
    resume: 'Des centaines de photos aériennes assemblées en un plan ou un modèle 3D, pour mesurer, documenter et suivre un terrain ou un site.',
    seoTitle: 'Cartographie, orthophoto et modélisation 3D par drone · Skysolus',
    seoDescription: 'Cartographie aérienne, photogrammétrie, orthophotos, modèles 3D de bâtiments et de terrains, relevés par drone selon la précision requise, dans le Var et en France.',
    accroche: 'La cartographie par drone transforme des centaines de photographies aériennes en un plan à l’échelle ou en un modèle en trois dimensions d’un terrain, d’un bâtiment ou d’un site.',
    quoi: [
      'La photogrammétrie consiste à photographier un site sous de nombreux angles, avec un fort recouvrement entre les images, puis à les assembler par logiciel pour reconstituer sa forme.',
      'On en tire une orthophotographie (une image aérienne redressée comme un plan, sur laquelle on peut mesurer des distances et des surfaces) et un modèle 3D du terrain ou des bâtiments.',
    ],
    aQuoi: [
      'Disposer d’un plan aérien à jour d’un terrain ou d’un site.',
      'Mesurer des distances, des surfaces, des hauteurs et des volumes.',
      'Visualiser un bâtiment, un terrain ou une infrastructure en 3D.',
      'Comparer l’état d’un site à différentes dates.',
    ],
    pourQui: [
      'Entreprises du BTP et terrassiers',
      'Architectes, bureaux d’études et maîtres d’œuvre',
      'Carrières, gravières et sites de stockage',
      'Collectivités et aménageurs',
      'Propriétaires de grands terrains et d’exploitations',
    ],
    exemples: [
      ['Orthophotographie', 'Un plan aérien précis d’un terrain, d’un chantier ou d’une exploitation, pour mesurer et dessiner dessus.'],
      ['Modèle 3D de bâtiment', 'Un modèle en trois dimensions de l’extérieur d’un bâtiment, utile pour un projet de rénovation ou une étude.'],
      ['Modèle de terrain', 'Le relief d’un terrain : pentes, talus, plateformes, berges.'],
      ['Relevés et volumes', 'Surfaces et volumes de stocks, de déblais ou de remblais, avec la précision définie avant la mission.'],
      ['Sites et infrastructures', 'Une vue d’ensemble mesurable d’un site industriel, d’une carrière ou d’un ouvrage.'],
    ],
    intervention: [
      'Définition du livrable et de la précision attendue : c’est elle qui détermine la méthode.',
      'Préparation du plan de vol automatique et, si nécessaire, pose de points de contrôle au sol mesurés.',
      'Vol de cartographie avec un recouvrement important entre les photos.',
      'Traitement par logiciel de photogrammétrie, contrôle de la précision, export dans les formats demandés.',
    ],
    livrables: ['Orthophotographie géoréférencée', 'Modèle 3D ou nuage de points', 'Mesures de surfaces et de volumes', 'Formats compatibles avec vos logiciels (selon le besoin)'],
    limites: [
      'La précision dépend de la méthode : sans points de contrôle au sol, les mesures sont relatives ; pour une précision de quelques centimètres, des points mesurés au sol sont nécessaires. Elle est définie et annoncée avant la mission.',
      'Un relevé par drone ne remplace pas un bornage ni un plan établi par un géomètre-expert lorsque celui-ci est exigé.',
      'La végétation dense masque le sol : sous les arbres, le terrain n’est pas mesuré.',
      'Les surfaces très uniformes, réfléchissantes ou en mouvement (eau, vitrages) se reconstituent mal.',
    ],
    avec: ['M4T'],
    secteurs: ['btp', 'industrie', 'collectivites', 'agriculture'],
    cta: { texte: 'Demander un devis' },
    faq: [
      ['Quelle précision peut-on obtenir ?', 'Elle dépend de la hauteur de vol, de l’appareil et de l’utilisation de points de contrôle au sol. Nous la définissons avec vous selon l’usage du résultat, et l’indiquons dans le devis.'],
      ['Dans quels formats recevez-vous les résultats ?', 'Orthophoto en image géoréférencée, modèle 3D ou nuage de points dans des formats courants, à préciser selon vos logiciels.'],
    ],
  },
  {
    id: 'chantier',
    slug: 'suivi-chantier-drone',
    titre: 'Suivi de chantiers et BTP',
    court: 'Suivi de chantier',
    statut: 'disponible',
    liste: [
      'Suivi photographique de chantiers',
      'Suivi de l’évolution des travaux',
      'Mesure et estimation de volumes',
      'Modélisation 3D de sites',
      'Documentation de l’avancement des projets',
    ],
    resume: 'Des prises de vues aériennes régulières pour suivre l’évolution d’un projet, faciliter la communication et garder une trace de l’avancée.',
    seoTitle: 'Suivi de chantier et BTP par drone : photos, volumes, 3D · Skysolus',
    seoDescription: 'Suivi photographique de chantiers par drone, évolution des travaux, estimation de volumes, modélisation 3D et documentation de l’avancement, dans le Var et en PACA.',
    accroche: 'Skysolus accompagne vos chantiers avec des prises de vues aériennes régulières, pour suivre l’évolution du projet, faciliter la communication entre les équipes et garder une trace visuelle claire de l’avancée.',
    quoi: [
      'Le chantier est photographié et filmé depuis les airs à intervalles réguliers, si possible depuis les mêmes points de vue.',
      'Si le projet le demande, chaque passage peut aussi produire une orthophoto ou un modèle 3D, pour mesurer les surfaces et estimer les volumes de terre déplacés (voir cartographie et modélisation 3D).',
    ],
    aQuoi: [
      'Avoir une vue d’ensemble de l’avancement des travaux.',
      'Faciliter la communication entre les équipes, le maître d’ouvrage et les partenaires.',
      'Estimer des volumes de déblais, de remblais ou de stocks.',
      'Constituer un historique visuel daté du chantier.',
    ],
    pourQui: [
      'Entreprises du bâtiment et des travaux publics',
      'Maîtres d’ouvrage et promoteurs',
      'Architectes et maîtres d’œuvre',
      'Collectivités qui conduisent des travaux',
      'Particuliers qui font construire',
    ],
    exemples: [
      ['Suivi photographique', 'Une série de vues prises aux mêmes endroits à chaque passage.'],
      ['Évolution des travaux', 'Un montage qui montre l’avancée du chantier, du terrassement à la livraison.'],
      ['Volumes', 'Estimation des volumes de terre déplacés ou stockés entre deux passages.'],
      ['Modèle 3D du site', 'Le chantier en trois dimensions, à une date donnée.'],
      ['Documentation', 'Un archivage daté, utile pour les réunions, les partenaires et la mémoire du projet.'],
    ],
    intervention: [
      'Définition avec vous de la fréquence, des points de vue et des livrables.',
      'Vérification des contraintes du site : grues, personnel au sol, espace aérien.',
      'Prises de vues à chaque passage, dans des conditions comparables.',
      'Livraison des images datées et, si demandé, des mesures et modèles 3D.',
    ],
    livrables: ['Photos datées, classées par passage', 'Vidéo de survol', 'Estimation de volumes et modèle 3D sur demande', 'Montage de l’évolution du chantier sur demande'],
    limites: [
      'Les modalités et la fréquence des prises de vues sont à définir selon le chantier et les contraintes du site.',
      'Le vol à proximité des personnes qui travaillent sur le chantier est encadré : il est préparé avec le responsable du chantier.',
      'La précision des volumes dépend de la méthode retenue (points de contrôle au sol notamment) ; elle est annoncée avant la mission.',
      'Les images documentent l’avancement : elles ne constituent pas un contrôle de conformité des travaux.',
    ],
    avec: ['M4T', 'Mini'],
    secteurs: ['particuliers-immobilier', 'btp', 'collectivites'],
    cta: { texte: 'Parler de votre projet' },
    faq: [
      ['À quelle fréquence venir sur le chantier ?', 'Chaque semaine, chaque mois ou à chaque étape clé : le rythme se cale sur votre planning et sur les contraintes du site.'],
      ['Les images sont-elles datées ?', 'Oui : chaque série est datée et classée par passage, pour constituer un historique du chantier.'],
    ],
  },
  {
    id: 'agriculture',
    slug: 'agriculture-environnement-drone',
    titre: 'Agriculture et environnement',
    court: 'Agriculture et environnement',
    statut: 'disponible',
    liste: [
      'Observation et surveillance de parcelles agricoles',
      'Inspection de cultures',
      'Cartographie de terrains',
      'Surveillance de zones naturelles',
      'Observation de zones difficiles d’accès',
    ],
    resume: 'Observer des parcelles, des cultures et des espaces naturels depuis les airs, et en garder une trace dans le temps.',
    seoTitle: 'Drone pour l’agriculture et l’environnement · Skysolus (Var)',
    seoDescription: 'Observation de parcelles et de cultures, cartographie de terrains et surveillance de zones naturelles par drone et ULM, dans le Var et en PACA.',
    accroche: 'Vue du ciel, une parcelle ou un espace naturel se lit dans son ensemble : différences de végétation, zones abîmées, accès, évolution d’une saison à l’autre.',
    quoi: [
      'Le drone survole des parcelles, des vignes, des vergers ou des espaces naturels et en rapporte des photos, des vidéos, un plan aérien ou des images thermiques.',
      'Pour les grandes étendues, l’ULM permet d’observer de vastes zones en une seule sortie.',
    ],
    aQuoi: [
      'Avoir une vue d’ensemble d’une exploitation ou d’un espace naturel.',
      'Repérer des zones où la végétation se comporte différemment, pour aller les examiner sur le terrain.',
      'Cartographier un terrain et mesurer des surfaces.',
      'Suivre l’évolution d’une parcelle ou d’un site dans le temps : après un orage, une sécheresse, un glissement de terrain.',
    ],
    pourQui: [
      'Agriculteurs, viticulteurs et arboriculteurs',
      'Gestionnaires d’espaces naturels et forestiers',
      'Collectivités',
      'Bureaux d’études en environnement',
    ],
    exemples: [
      ['Parcelles agricoles', 'Observation régulière des parcelles, état des cultures, zones abîmées après un épisode météo.'],
      ['Vignes et vergers', 'Vue d’ensemble des rangs, repérage de zones hétérogènes à vérifier au sol.'],
      ['Cartographie de terrains', 'Plan aérien d’une exploitation, mesure des surfaces.'],
      ['Zones naturelles', 'Suivi du littoral, des berges, des forêts et des zones humides, sans déranger la faune.'],
      ['Zones difficiles d’accès', 'Ravins, talus, berges ou parcelles enclavées, observés sans s’y rendre.'],
    ],
    intervention: [
      'Analyse du besoin : ce qu’il faut observer, sur quelle surface, à quelle fréquence.',
      'Choix de l’appareil : drone pour le détail, ULM pour les grandes étendues.',
      'Vol en respectant les zones protégées et la tranquillité de la faune.',
      'Livraison des images, du plan aérien ou des observations repérées.',
    ],
    livrables: ['Photos et vidéos aériennes', 'Plan aérien (orthophoto) et surfaces', 'Images datées pour un suivi dans le temps'],
    limites: [
      'Les images sont des photographies visibles et thermiques : Skysolus ne réalise pas d’analyse multispectrale ni de préconisation agronomique.',
      'Les observations orientent les vérifications sur le terrain ; elles ne remplacent pas l’expertise d’un agronome ou d’un technicien.',
      'La pulvérisation et l’épandage par drone ne sont pas proposés.',
      'Certaines zones naturelles (réserves, parcs, sites de nidification) sont interdites de survol ou soumises à autorisation.',
    ],
    avec: ['M4T', 'Mini', 'XL8'],
    secteurs: ['agriculture', 'collectivites'],
    cta: { texte: 'Parler de votre projet' },
    faq: [
      ['Pouvez-vous analyser l’état sanitaire de mes cultures ?', 'Les images permettent de repérer des zones où la végétation se comporte différemment. L’analyse de la cause relève d’un agronome ou d’un technicien, sur le terrain.'],
      ['Le drone peut-il traiter mes cultures ?', 'Non : Skysolus ne propose pas de pulvérisation ni d’épandage par drone.'],
    ],
  },
  {
    id: 'audiovisuel',
    slug: 'photo-video-aerienne-drone',
    titre: 'Audiovisuel et communication',
    court: 'Audiovisuel et communication',
    statut: 'disponible',
    liste: [
      'Prises de vues aériennes',
      'Photographies et vidéos professionnelles',
      'Films promotionnels et institutionnels',
      'Valorisation immobilière',
      'Reportages et événements',
      'Mise en valeur de sites touristiques et industriels',
    ],
    resume: 'Photos et vidéos aériennes pour présenter un bien, une entreprise, un site ou un événement.',
    seoTitle: 'Photo et vidéo aérienne par drone : immobilier, films · Skysolus',
    seoDescription: 'Photos et vidéos aériennes par drone : valorisation immobilière, films promotionnels et institutionnels, reportages, sites touristiques et industriels, depuis Hyères.',
    accroche: 'Avec Skysolus, vos biens, vos sites et vos projets prennent de la hauteur. Nous réalisons des photos et des vidéos aériennes qui montrent un lieu dans son ensemble et dans son environnement.',
    quoi: [
      'Des prises de vues réalisées par drone, à quelques dizaines de mètres de hauteur : photos, vidéos et séquences pour un film.',
      'Le DJI Mini 5 Pro, compact et discret, est conçu pour la photo et la vidéo ; le DJI Matrice 4T prend le relais quand il faut un zoom.',
    ],
    aQuoi: [
      'Mettre en valeur un bien immobilier, un terrain ou un domaine.',
      'Présenter une entreprise, un établissement ou un savoir-faire.',
      'Illustrer un site internet, une brochure ou les réseaux sociaux.',
      'Garder des images d’un événement ou d’un projet.',
    ],
    pourQui: [
      'Particuliers qui vendent ou louent leur bien',
      'Agences immobilières et promoteurs',
      'Entreprises, hôtels, campings et sites touristiques',
      'Industriels',
      'Collectivités et organisateurs d’événements',
    ],
    exemples: [
      ['Valorisation immobilière', 'La maison, le terrain, la piscine et leurs abords, vus dans leur ensemble.'],
      ['Films promotionnels et institutionnels', 'Des séquences aériennes pour un film d’entreprise ou de collectivité.'],
      ['Sites touristiques', 'Hôtels, campings, ports, plages et domaines dans leur environnement.'],
      ['Sites industriels', 'Une vue d’ensemble d’un site, pour la communication ou un rapport.'],
      ['Reportages et événements', 'Des images d’un événement de plein air, dans le cadre autorisé.'],
    ],
    intervention: [
      'Vérification du lieu et des règles de vol applicables, avant tout devis.',
      'Prises de vues à une heure choisie pour la lumière, selon la météo.',
      'Sélection et retouche des images, montage vidéo si vous le souhaitez.',
      'Livraison dans des formats adaptés au web, aux réseaux sociaux et à l’impression.',
    ],
    livrables: ['Photos retouchées', 'Vidéo montée, au format web et réseaux sociaux', 'Rushes (séquences brutes) sur demande'],
    limites: [
      'Les prises de vues sont aériennes et extérieures : la photographie d’intérieur n’est pas proposée.',
      'En agglomération, certains vols demandent une autorisation particulière ou ne sont pas possibles. Chaque lieu est vérifié avant le devis.',
      'Le survol du public n’est pas autorisé : lors d’un événement, les prises de vues se font à distance des spectateurs.',
      'Les personnes présentes ne doivent pas être reconnaissables sans leur accord. Le vol dépend de la météo : en cas de vent fort ou de pluie, il est reporté.',
    ],
    avec: ['Mini', 'M4T'],
    secteurs: ['particuliers-immobilier', 'tourisme', 'collectivites'],
    cta: { texte: 'Demander un devis', secondaire: ['Voir des exemples', '/realisations#immobilier'] },
    faq: [
      ['Peut-on survoler une maison en ville ?', 'Le vol en agglomération demande une démarche particulière, voire n’est pas autorisé selon le lieu. Nous vérifions chaque adresse avant de vous proposer un devis.'],
      ['Pouvez-vous filmer un événement ?', 'Oui, à distance du public et dans le cadre autorisé : le survol des spectateurs est interdit. La faisabilité est étudiée pour chaque événement.'],
      ['Que se passe-t-il s’il pleut ou s’il y a trop de vent ?', 'Le vol est reporté à une date compatible avec la météo, sans frais supplémentaires.'],
    ],
  },
  {
    id: 'surveillance',
    slug: 'surveillance-observation-aerienne',
    titre: 'Surveillance et observation aérienne',
    court: 'Surveillance et observation',
    statut: 'disponible',
    liste: [
      'Surveillance de sites et d’infrastructures',
      'Observation de zones étendues',
      'Inspection de zones sensibles',
      'Appui visuel aux opérations de contrôle et de prévention',
    ],
    resume: 'Observer un site, une infrastructure ou une vaste zone depuis les airs, par drone ou en ULM.',
    seoTitle: 'Surveillance et observation aérienne par drone et ULM · Skysolus',
    seoDescription: 'Surveillance de sites et d’infrastructures, observation de zones étendues en ULM, appui visuel aux opérations de contrôle et de prévention, depuis Hyères (Var).',
    accroche: 'Depuis les airs, on voit en quelques minutes ce qui demanderait des heures au sol. Skysolus observe des sites, des infrastructures et de vastes zones, par drone ou en ULM.',
    quoi: [
      'Le drone observe un site ou une infrastructure de près, avec son zoom et sa caméra thermique, qui repère une source de chaleur même de nuit ou à travers une végétation clairsemée.',
      'L’ULM Bristell XL8 couvre de grandes étendues en une seule sortie : littoral, massifs forestiers, réseaux, grands sites.',
    ],
    aQuoi: [
      'Faire un état visuel régulier d’un site ou d’une infrastructure.',
      'Observer de grandes étendues en peu de temps.',
      'Repérer un départ de feu, un dégât, une intrusion sur un site privé.',
      'Apporter un appui visuel aux équipes de contrôle et de prévention.',
    ],
    pourQui: [
      'Exploitants de sites industriels et d’infrastructures',
      'Gestionnaires de réseaux et de grands sites',
      'Collectivités',
      'Gestionnaires d’espaces naturels et forestiers',
    ],
    exemples: [
      ['Sites et infrastructures', 'Rondes aériennes sur un site industriel, une carrière ou un réseau, avec l’accord de l’exploitant.'],
      ['Zones étendues', 'Observation en ULM du littoral, d’un massif forestier ou d’un linéaire de plusieurs kilomètres.'],
      ['Zones sensibles', 'Observation de zones à accès restreint, avec les autorisations nécessaires.'],
      ['Contrôle et prévention', 'Images en direct ou après vol pour aider les équipes au sol, par exemple en période de risque d’incendie.'],
    ],
    intervention: [
      'Définition du périmètre, de la fréquence et de ce qu’il faut observer.',
      'Choix de l’appareil : drone pour un site, ULM pour les grandes étendues.',
      'Démarches et autorisations : espace aérien, accord de l’exploitant, zones réglementées.',
      'Vol, puis transmission des observations et des images.',
    ],
    livrables: ['Photos et vidéos datées', 'Images thermiques si nécessaire', 'Compte rendu des observations'],
    limites: [
      'Skysolus ne réalise pas de surveillance de personnes ni de l’espace public : les missions portent sur des sites et des infrastructures, avec l’accord de leur propriétaire ou exploitant, dans le respect de la vie privée.',
      'Certaines zones (sites militaires, industriels classés, aéroports) sont interdites de survol ou soumises à autorisation ; la mission dépend de ces autorisations.',
      'Le vol de nuit et le vol hors de vue du pilote sont encadrés par la réglementation et étudiés au cas par cas.',
      'L’ULM vole de jour, au-dessus des hauteurs minimales de survol : il ne remplace pas le drone pour l’observation rapprochée.',
    ],
    avec: ['XL8', 'M4T'],
    secteurs: ['industrie', 'collectivites', 'agriculture'],
    cta: { texte: 'Parler de votre projet' },
    faq: [
      ['Pouvez-vous surveiller mon site la nuit ?', 'Le vol de nuit est encadré par la réglementation. Il est étudié au cas par cas, selon le site et les autorisations possibles.'],
      ['Quand utiliser l’ULM plutôt que le drone ?', 'Pour couvrir de grandes distances ou de vastes surfaces en une sortie. Pour observer un détail de près, le drone reste l’outil adapté.'],
    ],
  },
  {
    id: 'specifiques',
    slug: 'nids-frelons-missions-specifiques-drone',
    titre: 'Prestations spécifiques',
    court: 'Prestations spécifiques',
    statut: 'disponible',
    liste: [
      'Inspection visuelle de nids de frelons et de guêpes',
      'Observation de zones difficiles d’accès',
      'Missions aériennes adaptées aux besoins particuliers',
    ],
    resume: 'Repérer un nid de frelons en hauteur, observer un endroit inaccessible ou étudier une mission sur mesure.',
    seoTitle: 'Nid de frelons, zones inaccessibles, missions sur mesure · Skysolus',
    seoDescription: 'Repérage par drone de nids de frelons et de guêpes en hauteur, observation de zones difficiles d’accès et missions aériennes sur mesure, depuis Hyères (Var).',
    accroche: 'Certaines demandes ne rentrent dans aucune case : un nid de frelons en haut d’un arbre, un endroit qu’on ne peut pas atteindre, un besoin particulier. Le drone permet souvent d’y voir clair sans prendre de risque.',
    quoi: [
      'Le drone s’approche à distance de sécurité d’un endroit difficile ou dangereux à atteindre, et en rapporte des photos et des vidéos détaillées.',
      'Pour un nid de frelons ou de guêpes, il permet de le localiser précisément et d’évaluer sa taille et son accès, sans s’en approcher.',
    ],
    aQuoi: [
      'Localiser un nid de frelons ou de guêpes en hauteur et préparer son traitement.',
      'Voir un endroit inaccessible sans échelle, nacelle ni escalade.',
      'Répondre à un besoin d’observation aérienne particulier.',
    ],
    pourQui: [
      'Particuliers',
      'Professionnels de la désinsectisation',
      'Collectivités',
      'Entreprises et gestionnaires de sites',
    ],
    exemples: [
      ['Nids de frelons et de guêpes', 'Repérage d’un nid dans un arbre, sous un toit ou dans une cheminée : emplacement, taille, accès.'],
      ['Zones difficiles d’accès', 'Falaise, ravin, toiture fragile, cheminée : des images avant de décider d’une intervention.'],
      ['Missions sur mesure', 'Un besoin aérien particulier, étudié avec vous pour voir s’il peut être réalisé, et comment.'],
    ],
    intervention: [
      'Échange sur le besoin et sur les contraintes du lieu.',
      'Étude de la faisabilité : réglementation, sécurité, météo.',
      'Vol à distance de sécurité et prises de vues.',
      'Transmission des images et des observations, pour vous ou pour le professionnel qui interviendra.',
    ],
    livrables: ['Photos et vidéos de la zone', 'Localisation de l’élément observé'],
    limites: [
      'Skysolus repère et documente les nids de frelons et de guêpes mais ne les détruit pas : leur traitement relève d’un professionnel de la désinsectisation.',
      'Le drone reste à distance de sécurité du nid, pour ne pas provoquer les insectes.',
      'Chaque mission sur mesure est étudiée avant d’être acceptée : certaines ne sont pas autorisées ou pas réalisables en sécurité.',
    ],
    avec: ['Mini', 'M4T'],
    secteurs: ['particuliers-immobilier', 'collectivites'],
    cta: { texte: 'Parler de votre projet' },
    faq: [
      ['Le drone peut-il détruire un nid de frelons ?', 'Non. Il sert à localiser le nid et à évaluer son accès ; sa destruction relève d’un professionnel de la désinsectisation.'],
    ],
  },
];

export const disponibles = prestations.filter((p) => p.statut === 'disponible');
export const prestationParId = (id: string) => prestations.find((p) => p.id === id)!;
export const urlPrestation = (id: string) => `/prestations/${prestationParId(id).slug}`;

// Texte d'introduction de la page Prestations (texte de Johann, 11 novembre 2026)
export const introPrestations = {
  titre: 'Nos prestations par drone',
  sousTitre: 'Des solutions aériennes au service des professionnels et des particuliers',
  texte: [
    'Skysolus propose une gamme de prestations aériennes par drone adaptées aux besoins des entreprises, des collectivités, des industriels et des particuliers.',
    'Grâce aux technologies embarquées et à la précision des prises de vues aériennes, nous réalisons des missions d’inspection, d’analyse, de cartographie et de valorisation visuelle.',
  ],
  signature: 'Skysolus – L’expertise aérienne au service de vos projets.',
  zone: 'Interventions dans le Var, en région PACA, partout en France et Outre-mer, et, selon les missions, à l’international.',
};
