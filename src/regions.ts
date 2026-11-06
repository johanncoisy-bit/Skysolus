// Pages régionales : interventions partout en France depuis Hyères.
// Chaque région a un texte propre (besoins typiques, contraintes) pour éviter les pages en double.

export interface Region {
  slug: string;
  nom: string;
  villes: string[];
  intro: string;
  besoins: string;
  contraintes: string;
  focus: string[]; // ids de prestations (data.ts)
}

export const regions: Region[] = [
  {
    slug: 'provence-alpes-cote-d-azur',
    nom: 'Provence-Alpes-Côte d’Azur',
    villes: ['Marseille', 'Nice', 'Toulon', 'Avignon', 'Aix-en-Provence', 'Hyères'],
    intro: 'La région PACA est la région de base de Skysolus : depuis Hyères, nous intervenons rapidement des Bouches-du-Rhône aux Alpes-Maritimes, du littoral aux Alpes du Sud.',
    besoins: 'Toitures et copropriétés des grandes villes, centrales photovoltaïques de l’arrière-pays, domaines viticoles, littoral et espaces naturels, ports et événements nautiques.',
    contraintes: 'Le littoral concentre aéroports, zones militaires et espaces protégés : chaque adresse est vérifiée sur les cartes officielles avant de proposer un devis.',
    focus: ['thermo', 'batiment', 'image', 'environnement'],
  },
  {
    slug: 'occitanie',
    nom: 'Occitanie',
    villes: ['Montpellier', 'Toulouse', 'Nîmes', 'Perpignan', 'Béziers', 'Narbonne'],
    intro: 'Région voisine de la Provence, l’Occitanie réunit un littoral étendu, de grands vignobles et de nombreuses installations solaires.',
    besoins: 'Thermographie de centrales photovoltaïques au sol et en toiture, observation de vignobles, suivi du trait de côte languedocien, chantiers des métropoles.',
    contraintes: 'Les missions sont regroupées et planifiées pour limiter les déplacements : une centrale ou un domaine peut souvent être traité en une journée sur place.',
    focus: ['thermo', 'agri', 'environnement', 'chantier'],
  },
  {
    slug: 'auvergne-rhone-alpes',
    nom: 'Auvergne-Rhône-Alpes',
    villes: ['Lyon', 'Grenoble', 'Saint-Étienne', 'Annecy', 'Clermont-Ferrand', 'Valence'],
    intro: 'De la vallée du Rhône aux Alpes, la région compte de nombreux ouvrages d’art, sites industriels et reliefs difficiles d’accès.',
    besoins: 'Inspection d’ouvrages et de sites industriels, thermographie de bâtiments, suivi de chantiers et de carrières, prises de vues de sites touristiques.',
    contraintes: 'En montagne, le relief et la météo imposent une préparation spécifique : fenêtres météo, points de décollage, hauteur de vol par rapport au terrain.',
    focus: ['industrie', 'thermo', 'chantier', 'image'],
  },
  {
    slug: 'nouvelle-aquitaine',
    nom: 'Nouvelle-Aquitaine',
    villes: ['Bordeaux', 'La Rochelle', 'Biarritz', 'Poitiers', 'Limoges', 'Arcachon'],
    intro: 'Vignobles, littoral atlantique et vastes massifs forestiers : la Nouvelle-Aquitaine se prête à l’observation aérienne à toutes les échelles.',
    besoins: 'Observation de vignobles, suivi de l’érosion côtière et des dunes, surveillance de grands massifs, prises de vues de domaines et de patrimoine.',
    contraintes: 'Pour les grandes surfaces forestières ou littorales, l’ULM couvre en une sortie ce que le drone parcourrait en plusieurs jours.',
    focus: ['agri', 'environnement', 'surveillance', 'image'],
  },
  {
    slug: 'ile-de-france',
    nom: 'Île-de-France',
    villes: ['Paris', 'Versailles', 'Saint-Denis', 'Boulogne-Billancourt', 'Créteil', 'Cergy'],
    intro: 'En Île-de-France, les besoins portent surtout sur le bâtiment, le patrimoine et les grands chantiers.',
    besoins: 'Inspection de toitures et de façades, suivi de chantiers, thermographie de bâtiments, prises de vues de sites d’entreprise.',
    contraintes: 'L’agglomération parisienne est l’une des zones les plus réglementées de France pour les drones. Les vols y relèvent d’autorisations spécifiques et ne sont pas toujours possibles : nous étudions la faisabilité avant tout engagement.',
    focus: ['batiment', 'chantier', 'thermo', 'industrie'],
  },
  {
    slug: 'bretagne',
    nom: 'Bretagne',
    villes: ['Rennes', 'Brest', 'Quimper', 'Lorient', 'Saint-Malo', 'Vannes'],
    intro: 'Avec ses côtes découpées, ses ports et son patrimoine, la Bretagne offre de nombreux sujets d’observation et de valorisation aérienne.',
    besoins: 'Suivi du littoral et des falaises, ports et chantiers navals, patrimoine bâti, toitures en ardoise, exploitations agricoles.',
    contraintes: 'Le vent et la météo océanique imposent une planification souple : la date de vol est confirmée au dernier moment selon les prévisions.',
    focus: ['environnement', 'mer', 'batiment', 'agri'],
  },
  {
    slug: 'normandie',
    nom: 'Normandie',
    villes: ['Rouen', 'Caen', 'Le Havre', 'Cherbourg', 'Deauville', 'Évreux'],
    intro: 'Falaises, plages, ports et patrimoine : la Normandie a un littoral exposé dont l’évolution se suit d’en haut.',
    besoins: 'Suivi du recul des falaises et du trait de côte, ports et installations industrielles, patrimoine et monuments, haras et domaines.',
    contraintes: 'Le littoral normand compte de nombreux sites protégés et installations sensibles : chaque mission est vérifiée en amont.',
    focus: ['environnement', 'industrie', 'image', 'mer'],
  },
  {
    slug: 'hauts-de-france',
    nom: 'Hauts-de-France',
    villes: ['Lille', 'Amiens', 'Dunkerque', 'Calais', 'Arras', 'Boulogne-sur-Mer'],
    intro: 'Territoire industriel et logistique, les Hauts-de-France ont de grands sites où l’inspection aérienne fait gagner du temps.',
    besoins: 'Inspection de toitures industrielles et d’entrepôts, thermographie, suivi de chantiers, grandes cultures, littoral de la Côte d’Opale.',
    contraintes: 'Les grands sites industriels demandent souvent un protocole de sécurité propre : il est défini avec l’exploitant avant la mission.',
    focus: ['industrie', 'thermo', 'chantier', 'agri'],
  },
  {
    slug: 'grand-est',
    nom: 'Grand Est',
    villes: ['Strasbourg', 'Reims', 'Metz', 'Nancy', 'Mulhouse', 'Colmar'],
    intro: 'Vignobles de Champagne et d’Alsace, patrimoine, industrie : le Grand Est combine des besoins très variés.',
    besoins: 'Observation et valorisation de vignobles, inspection de sites industriels, thermographie de bâtiments, patrimoine et monuments.',
    contraintes: 'Les missions viticoles sont calées sur le calendrier de la vigne, et les relevés thermiques sur la saison froide.',
    focus: ['agri', 'industrie', 'thermo', 'image'],
  },
  {
    slug: 'pays-de-la-loire',
    nom: 'Pays de la Loire',
    villes: ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire', 'La Roche-sur-Yon', 'Les Sables-d’Olonne'],
    intro: 'Entre l’estuaire de la Loire, le littoral vendéen et le vignoble angevin, la région allie industrie, nautisme et agriculture.',
    besoins: 'Chantiers et sites industriels, ports et nautisme, suivi du littoral, vignobles, thermographie de bâtiments.',
    contraintes: 'Les sites portuaires et industriels de l’estuaire sont soumis à des règles d’accès strictes, intégrées dès la préparation.',
    focus: ['industrie', 'mer', 'environnement', 'agri'],
  },
  {
    slug: 'bourgogne-franche-comte',
    nom: 'Bourgogne-Franche-Comté',
    villes: ['Dijon', 'Besançon', 'Beaune', 'Auxerre', 'Mâcon', 'Belfort'],
    intro: 'Vignobles prestigieux, forêts, patrimoine roman et industrie : la région se découvre et se surveille aussi depuis le ciel.',
    besoins: 'Valorisation de domaines viticoles, observation de parcelles, patrimoine, toitures et sites industriels.',
    contraintes: 'Pour les domaines, les prises de vues sont planifiées selon la saison et la lumière recherchée.',
    focus: ['agri', 'image', 'batiment', 'industrie'],
  },
  {
    slug: 'centre-val-de-loire',
    nom: 'Centre-Val de Loire',
    villes: ['Orléans', 'Tours', 'Blois', 'Chartres', 'Bourges', 'Amboise'],
    intro: 'Châteaux de la Loire, grandes cultures et sites industriels : un territoire où l’image aérienne valorise autant qu’elle informe.',
    besoins: 'Patrimoine et monuments, grandes cultures, toitures et bâtiments agricoles, centrales solaires.',
    contraintes: 'Les sites patrimoniaux et leurs abords peuvent faire l’objet de restrictions : l’accord du gestionnaire est recherché en amont.',
    focus: ['image', 'agri', 'batiment', 'thermo'],
  },
  {
    slug: 'corse',
    nom: 'Corse',
    villes: ['Ajaccio', 'Bastia', 'Porto-Vecchio', 'Calvi', 'Bonifacio', 'Corte'],
    intro: 'Littoral préservé, maquis, villages perchés : la Corse est un territoire exceptionnel pour l’image aérienne et le suivi des espaces naturels.',
    besoins: 'Prises de vues de propriétés, d’hôtels et de sites touristiques, suivi du littoral et des espaces naturels, ports de plaisance.',
    contraintes: 'Les missions en Corse sont organisées en séjour, en regroupant plusieurs interventions. Les nombreux espaces protégés sont vérifiés avant chaque vol.',
    focus: ['image', 'environnement', 'mer', 'batiment'],
  },
];

export const outreMer = {
  intro: 'Skysolus peut intervenir en outre-mer et à l’international pour des missions planifiées, sous réserve de la faisabilité réglementaire locale.',
  texte: 'Chaque territoire a ses propres règles d’espace aérien et d’autorisation. Nous étudions la mission en amont : matériel à transporter, autorisations, durée sur place et regroupement des interventions pour en maîtriser le coût.',
};
