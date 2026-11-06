// Contenu des pages prestations (une page par service, pensée pour la recherche locale).
// Clé = id de la prestation dans data.ts

export interface PageSeo {
  slug: string;
  title: string; // balise <title>, ~60 caractères
  description: string; // meta description, ~155 caractères
  h1: string;
  intro: string[];
  livrables: string[];
  faq: [string, string][];
}

export const pagesSeo: Record<string, PageSeo> = {
  image: {
    slug: 'photo-video-drone-hyeres-var',
    title: 'Photo et vidéo par drone à Hyères et dans le Var · Skysolus',
    description: 'Photos et films aériens par drone à Hyères et dans le Var : immobilier, tourisme, hôtellerie, communication d’entreprise. Devis sur demande.',
    h1: 'Photo et vidéo aériennes par drone, à Hyères et dans le Var',
    intro: [
      'Une vue aérienne montre ce qu’une photo au sol ne peut pas montrer : l’étendue d’un domaine, la proximité de la mer, l’accès, l’environnement d’un bien ou d’un établissement.',
      'Skysolus réalise des photos et des films aériens pour les particuliers, les agences immobilières, les hôtels, campings, restaurants, offices de tourisme et entreprises du Var, avec un drone DJI Mini 5 Pro, compact et discret, ou un DJI Matrice 4T selon le site.',
    ],
    livrables: ['Photos haute définition retouchées', 'Film monté, format web et réseaux sociaux', 'Rushs bruts sur demande'],
    faq: [
      ['Peut-on survoler une maison en ville ?', 'Le vol en agglomération dans l’espace public n’est pas possible en catégorie Ouverte : ces missions demandent un cadre réglementaire spécifique. Nous vérifions la faisabilité pour chaque adresse avant de vous proposer un devis.'],
      ['Combien de temps faut-il pour recevoir les images ?', 'Le délai dépend du volume et du montage demandé. Il est précisé dans le devis.'],
      ['Que se passe-t-il s’il pleut ou s’il y a trop de vent ?', 'Le vol est reporté à une date compatible avec la météo, sans frais supplémentaires.'],
    ],
  },
  batiment: {
    slug: 'inspection-toiture-drone-var',
    title: 'Inspection de toiture par drone dans le Var · Skysolus',
    description: 'Inspection visuelle de toitures, façades, gouttières et patrimoine par drone à Hyères et dans le Var, sans échafaudage ni nacelle. Rapport photo.',
    h1: 'Inspection de toitures et de façades par drone dans le Var',
    intro: [
      'Avant de monter sur un toit ou de louer une nacelle, un vol de drone permet de voir l’état d’une couverture, d’une cheminée, d’une gouttière ou d’une façade, en photo et en vidéo haute définition.',
      'Particuliers, couvreurs, syndics et gestionnaires de patrimoine : vous obtenez un état des lieux visuel, la localisation des zones à vérifier et une comparaison avant et après travaux.',
    ],
    livrables: ['Rapport photo annoté', 'Vidéo de survol', 'Comparatif avant / après travaux'],
    faq: [
      ['Le drone remplace-t-il le diagnostic d’un couvreur ?', 'Non. Il fournit des images pour repérer les zones à examiner ; le diagnostic reste celui d’un professionnel du bâtiment.'],
      ['Faut-il être présent pendant le vol ?', 'Ce n’est pas obligatoire, mais nous avons besoin d’un accès au site et de l’accord du propriétaire.'],
      ['Peut-on repérer une fuite ?', 'Les dégradations visibles, oui. Une infiltration peut parfois être suspectée en thermographie, selon les conditions.'],
    ],
  },
  thermo: {
    slug: 'thermographie-drone-var',
    title: 'Thermographie par drone dans le Var · photovoltaïque, bâtiment',
    description: 'Thermographie infrarouge par drone DJI Matrice 4T : centrales et toitures photovoltaïques, bâtiments, équipements. Hyères, Var, région PACA.',
    h1: 'Thermographie infrarouge par drone : photovoltaïque et bâtiment',
    intro: [
      'La caméra thermique du DJI Matrice 4T repère les écarts de température visibles en surface : modules photovoltaïques défaillants, points chauds, défauts d’isolation apparents, équipements qui chauffent anormalement.',
      'Chaque mission suit un protocole adapté : ensoleillement, heure, météo, angle de vue. Le rapport précise ce que les images permettent de conclure, et ce qu’elles ne permettent pas.',
    ],
    livrables: ['Images thermiques et visibles associées', 'Repérage des anomalies sur plan ou vue aérienne', 'Rapport avec limites d’interprétation'],
    faq: [
      ['Quand faire une thermographie photovoltaïque ?', 'Par temps clair et avec un ensoleillement suffisant, pendant que les panneaux produisent : c’est là que les défauts se voient le mieux.'],
      ['Et pour un bâtiment ?', 'Il faut un écart de température entre l’intérieur et l’extérieur, en général en saison froide, tôt le matin ou en soirée.'],
      ['Le rapport a-t-il une valeur d’expertise ?', 'C’est un document d’aide au diagnostic. Il oriente les vérifications des professionnels concernés.'],
    ],
  },
  chantier: {
    slug: 'suivi-chantier-cartographie-drone-var',
    title: 'Suivi de chantier, orthophoto et 3D par drone · Var, PACA',
    description: 'Suivi de chantier par drone, orthophotos, modèles 3D, surfaces et cubatures pour le BTP, les architectes et bureaux d’études du Var et de PACA.',
    h1: 'Suivi de chantier, cartographie et modèles 3D par drone',
    intro: [
      'Des prises de vues régulières documentent l’avancement d’un chantier depuis le même point de vue, pour les réunions, les clients et les archives.',
      'Par photogrammétrie, les images deviennent une orthophoto, un modèle 3D ou un nuage de points, à partir desquels on mesure des surfaces et des volumes. La précision dépend de la méthode et des points de contrôle au sol : elle est définie avec vous avant la mission.',
    ],
    livrables: ['Photos et vidéos d’avancement datées', 'Orthophoto géoréférencée', 'Modèle 3D, surfaces et cubatures'],
    faq: [
      ['À quelle fréquence venir sur le chantier ?', 'Hebdomadaire, mensuelle ou par étape clé : le rythme se cale sur votre planning.'],
      ['Quelle précision pour les volumes ?', 'Elle dépend du protocole (points de contrôle, recouvrement, hauteur de vol). Nous l’annonçons avant la mission.'],
      ['Dans quels formats sont livrées les données ?', 'Dans des formats standards lisibles par les logiciels de DAO, de SIG et de modélisation.'],
    ],
  },
  industrie: {
    slug: 'inspection-industrielle-drone-paca',
    title: 'Inspection industrielle et d’ouvrages par drone · Var, PACA',
    description: 'Inspection visuelle par drone de ponts, pylônes, silos, réservoirs, toitures industrielles et installations difficiles d’accès, dans le Var et en PACA.',
    h1: 'Inspection industrielle et d’ouvrages par drone',
    intro: [
      'Charpentes, silos, réservoirs, pylônes, ouvrages d’art : le drone s’approche de zones difficiles d’accès et limite les interventions humaines en hauteur.',
      'Avec le zoom et la caméra thermique du DJI Matrice 4T, les images servent à préparer une maintenance en repérant à l’avance les zones à examiner de plus près.',
    ],
    livrables: ['Photos et vidéos haute définition', 'Images zoomées des points sensibles', 'Thermographie si nécessaire'],
    faq: [
      ['Pouvez-vous intervenir près de lignes électriques ?', 'Uniquement avec les autorisations et les distances de sécurité requises, étudiées au cas par cas avec l’exploitant.'],
      ['Faut-il arrêter l’installation ?', 'Pas forcément : cela dépend du site et des consignes de sécurité. Nous le définissons ensemble.'],
    ],
  },
  surveillance: {
    slug: 'surveillance-aerienne-ulm-var',
    title: 'Surveillance et reconnaissance aériennes en ULM · Var, PACA',
    description: 'Surveillance aérienne en ULM Bristell XL8 et drone : grands sites, littoral, massifs forestiers, reconnaissance après sinistre. Base à Hyères (Var).',
    h1: 'Surveillance et reconnaissance aériennes en ULM et par drone',
    intro: [
      'L’ULM Bristell XL8 couvre en une sortie de grandes distances : littoral, massifs forestiers, emprises industrielles ou agricoles étendues. La grande verrière offre une très bonne visibilité à l’observateur et à la caméra.',
      'Le drone prend le relais pour le détail, au plus près d’une zone repérée depuis l’avion. Les missions se font dans l’espace aérien autorisé et dans le respect du droit et de la vie privée.',
    ],
    livrables: ['Photos et vidéos géolocalisées', 'Compte rendu d’observation', 'Suivi dans le temps d’un même site'],
    faq: [
      ['Quelle différence entre l’ULM et le drone ?', 'L’ULM couvre de grandes surfaces rapidement ; le drone observe de près, à faible hauteur.'],
      ['Intervenez-vous après une tempête ou un incendie ?', 'Oui, pour documenter les dégâts, lorsque l’accès à l’espace aérien est autorisé et en coordination avec les services compétents si nécessaire.'],
    ],
  },
  environnement: {
    slug: 'drone-littoral-environnement-var',
    title: 'Suivi du littoral et de l’environnement par drone · Var',
    description: 'Suivi de l’érosion côtière, des dunes, berges et espaces naturels par drone et ULM dans le Var. Documentation après intempéries.',
    h1: 'Suivi du littoral et des milieux naturels par drone et ULM',
    intro: [
      'Plages, dunes, falaises, berges, zones humides : des prises de vues répétées depuis les mêmes points permettent de suivre l’évolution d’un site dans le temps.',
      'Les vols respectent les zones protégées et la faune : certaines zones du littoral varois et des îles sont soumises à des restrictions, vérifiées avant chaque mission.',
    ],
    livrables: ['Séries photo comparables dans le temps', 'Orthophotos et modèles de terrain', 'Documentation après intempéries'],
    faq: [
      ['Pouvez-vous voler au-dessus des îles d’Hyères ?', 'Le parc national de Port-Cros et certaines zones sont réglementés. Chaque demande est vérifiée et, si nécessaire, soumise aux autorisations requises.'],
      ['Travaillez-vous avec les collectivités ?', 'Oui : communes, intercommunalités, gestionnaires d’espaces naturels et bureaux d’études.'],
    ],
  },
  agri: {
    slug: 'drone-agriculture-viticulture-var',
    title: 'Drone pour l’agriculture et la viticulture dans le Var',
    description: 'Observation et cartographie de vignes, parcelles agricoles et vergers par drone dans le Var : suivi des cultures et repérage des zones hétérogènes.',
    h1: 'Observation des vignes et des cultures par drone',
    intro: [
      'Vu d’en haut, un vignoble ou une parcelle révèle ses différences : zones moins vigoureuses, manquants, problèmes d’irrigation, dégâts après un orage.',
      'Skysolus réalise des prises de vues et des cartographies de parcelles pour les viticulteurs, agriculteurs et domaines du Var. Les analyses spécialisées, comme le multispectral, demandent un capteur dédié et sont étudiées au cas par cas.',
    ],
    livrables: ['Vues aériennes des parcelles', 'Cartographie et orthophoto', 'Photos et films pour la communication du domaine'],
    faq: [
      ['Faites-vous de la pulvérisation par drone ?', 'Non. La pulvérisation demande des autorisations particulières : elle ne fait pas partie de nos prestations actuelles.'],
      ['Pouvez-vous filmer le domaine pour sa communication ?', 'Oui, avec le DJI Mini 5 Pro : vignes, chai, bâtiments et paysage.'],
    ],
  },
  mer: {
    slug: 'drone-port-nautisme-evenement-var',
    title: 'Drone pour ports, nautisme et événements dans le Var',
    description: 'Photos et vidéos aériennes de ports, marinas, yachts, régates et événements de plein air à Hyères et dans le Var, dans le respect de la sécurité du public.',
    h1: 'Ports, nautisme et événements filmés par drone',
    intro: [
      'Marinas, chantiers navals, bateaux et yachts, régates : le drone met en valeur un port ou une embarcation dans son décor, de la rade d’Hyères aux îles d’Or.',
      'Pour les événements, le survol du public n’est possible que dans un cadre autorisé : chaque captation est préparée avec l’organisateur.',
    ],
    livrables: ['Photos et films promotionnels', 'Reportage d’événement', 'Images d’ouvrages portuaires (digues, quais)'],
    faq: [
      ['Pouvez-vous filmer un mariage ?', 'Oui, dans un cadre autorisé et sans survol des invités.'],
      ['Filmez-vous depuis un bateau ?', 'C’est possible selon la situation et les règles applicables : à étudier lors du devis.'],
    ],
  },
};
