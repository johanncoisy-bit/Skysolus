// Pages régionales : interventions partout en France depuis Hyères.
// Chaque région a un texte propre (besoins typiques, contraintes) pour éviter les pages en double.

export interface Region {
  slug: string;
  nom: string;
  villes: string[];
  intro: string;
  besoins: string;
  contraintes: string;
  focus: string[]; // ids de prestations (prestations.ts)
}

export const regions: Region[] = [
  {
    slug: 'provence-alpes-cote-d-azur',
    nom: 'Provence-Alpes-Côte d’Azur',
    villes: ['Marseille', 'Nice', 'Toulon', 'Avignon', 'Aix-en-Provence', 'Hyères'],
    intro: 'La région PACA est la région de base de Sky Solus : depuis Hyères, nous intervenons rapidement des Bouches-du-Rhône aux Alpes-Maritimes, du littoral aux Alpes du Sud.',
    besoins: 'Toitures et copropriétés des grandes villes, centrales photovoltaïques de l’arrière-pays, biens immobiliers du littoral, chantiers des métropoles.',
    contraintes: 'Le littoral concentre aéroports, zones militaires et espaces protégés : chaque adresse est vérifiée sur les cartes officielles avant de proposer un devis.',
    focus: ['audiovisuel', 'inspection', 'thermographie', 'chantier'],
  },
  {
    slug: 'occitanie',
    nom: 'Occitanie',
    villes: ['Montpellier', 'Toulouse', 'Nîmes', 'Perpignan', 'Béziers', 'Narbonne'],
    intro: 'Région voisine de la Provence, l’Occitanie réunit un littoral étendu, des parcs éoliens et de nombreuses installations solaires.',
    besoins: 'Thermographie de centrales photovoltaïques au sol et en toiture, inspection d’éoliennes et de toitures, chantiers des métropoles, biens immobiliers du littoral.',
    contraintes: 'Les missions sont regroupées et planifiées pour limiter les déplacements : une centrale ou un domaine peut souvent être traité en une journée sur place.',
    focus: ['thermographie', 'inspection', 'chantier', 'audiovisuel'],
  },
  {
    slug: 'auvergne-rhone-alpes',
    nom: 'Auvergne-Rhône-Alpes',
    villes: ['Lyon', 'Grenoble', 'Saint-Étienne', 'Annecy', 'Clermont-Ferrand', 'Valence'],
    intro: 'De la vallée du Rhône aux Alpes, la région compte de nombreux ouvrages d’art, sites industriels et reliefs difficiles d’accès.',
    besoins: 'Inspection d’ouvrages d’art et de sites industriels, thermographie de bâtiments, suivi de chantiers, observation d’antennes et de pylônes.',
    contraintes: 'En montagne, le relief et la météo imposent une préparation spécifique : fenêtres météo, points de décollage, hauteur de vol par rapport au terrain.',
    focus: ['inspection', 'thermographie', 'chantier', 'audiovisuel'],
  },
  {
    slug: 'nouvelle-aquitaine',
    nom: 'Nouvelle-Aquitaine',
    villes: ['Bordeaux', 'La Rochelle', 'Biarritz', 'Poitiers', 'Limoges', 'Arcachon'],
    intro: 'Littoral atlantique, domaines, parcs éoliens et solaires : la Nouvelle-Aquitaine compte de nombreux sites qui gagnent à être observés d’en haut.',
    besoins: 'Biens immobiliers du littoral et domaines, inspection d’éoliennes et de toitures, thermographie d’installations photovoltaïques, suivi de chantiers.',
    contraintes: 'Les missions sont regroupées et planifiées pour limiter les déplacements : plusieurs sites d’une même zone peuvent souvent être traités lors d’un même séjour.',
    focus: ['audiovisuel', 'inspection', 'thermographie', 'chantier'],
  },
  {
    slug: 'ile-de-france',
    nom: 'Île-de-France',
    villes: ['Paris', 'Versailles', 'Saint-Denis', 'Boulogne-Billancourt', 'Créteil', 'Cergy'],
    intro: 'En Île-de-France, les besoins portent surtout sur le bâtiment, le patrimoine et les grands chantiers.',
    besoins: 'Inspection de toitures et de façades, suivi de chantiers, thermographie de bâtiments, prises de vues de sites d’entreprise.',
    contraintes: 'L’agglomération parisienne est l’une des zones les plus réglementées de France pour les drones. Les vols y relèvent d’autorisations spécifiques et ne sont pas toujours possibles : nous étudions la faisabilité avant tout engagement.',
    focus: ['inspection', 'chantier', 'thermographie', 'audiovisuel'],
  },
  {
    slug: 'bretagne',
    nom: 'Bretagne',
    villes: ['Rennes', 'Brest', 'Quimper', 'Lorient', 'Saint-Malo', 'Vannes'],
    intro: 'Avec ses côtes, ses ports et son patrimoine bâti, la Bretagne compte de nombreux bâtiments et ouvrages exposés au vent et aux embruns.',
    besoins: 'Toitures en ardoise et patrimoine bâti, ouvrages et installations portuaires, parcs éoliens, biens immobiliers du littoral.',
    contraintes: 'Le vent et la météo océanique imposent une planification souple : la date de vol est confirmée au dernier moment selon les prévisions.',
    focus: ['inspection', 'audiovisuel', 'thermographie', 'chantier'],
  },
  {
    slug: 'normandie',
    nom: 'Normandie',
    villes: ['Rouen', 'Caen', 'Le Havre', 'Cherbourg', 'Deauville', 'Évreux'],
    intro: 'Ports, sites industriels, patrimoine et littoral : la Normandie réunit des besoins d’inspection et de valorisation variés.',
    besoins: 'Installations portuaires et industrielles, éoliennes, patrimoine et toitures, biens immobiliers de la côte.',
    contraintes: 'Le littoral normand compte de nombreux sites protégés et installations sensibles : chaque mission est vérifiée en amont.',
    focus: ['inspection', 'thermographie', 'audiovisuel', 'chantier'],
  },
  {
    slug: 'hauts-de-france',
    nom: 'Hauts-de-France',
    villes: ['Lille', 'Amiens', 'Dunkerque', 'Calais', 'Arras', 'Boulogne-sur-Mer'],
    intro: 'Territoire industriel et logistique, les Hauts-de-France ont de grands sites où l’inspection aérienne fait gagner du temps.',
    besoins: 'Inspection de toitures industrielles et d’entrepôts, thermographie, suivi de chantiers, parcs éoliens.',
    contraintes: 'Les grands sites industriels demandent souvent un protocole de sécurité propre : il est défini avec l’exploitant avant la mission.',
    focus: ['inspection', 'thermographie', 'chantier', 'audiovisuel'],
  },
  {
    slug: 'grand-est',
    nom: 'Grand Est',
    villes: ['Strasbourg', 'Reims', 'Metz', 'Nancy', 'Mulhouse', 'Colmar'],
    intro: 'Domaines viticoles, patrimoine, industrie et éolien : le Grand Est combine des besoins très variés.',
    besoins: 'Inspection de sites industriels et d’éoliennes, thermographie de bâtiments, prises de vues de domaines et de propriétés.',
    contraintes: 'Les relevés thermiques de bâtiments sont planifiés en saison froide, quand l’écart de température entre intérieur et extérieur est suffisant.',
    focus: ['inspection', 'thermographie', 'audiovisuel', 'chantier'],
  },
  {
    slug: 'pays-de-la-loire',
    nom: 'Pays de la Loire',
    villes: ['Nantes', 'Angers', 'Le Mans', 'Saint-Nazaire', 'La Roche-sur-Yon', 'Les Sables-d’Olonne'],
    intro: 'Entre l’estuaire de la Loire, le littoral vendéen et l’Anjou, la région allie industrie, construction et immobilier de bord de mer.',
    besoins: 'Chantiers et sites industriels, installations portuaires, biens immobiliers du littoral, thermographie de bâtiments.',
    contraintes: 'Les sites portuaires et industriels de l’estuaire sont soumis à des règles d’accès strictes, intégrées dès la préparation.',
    focus: ['inspection', 'chantier', 'audiovisuel', 'thermographie'],
  },
  {
    slug: 'bourgogne-franche-comte',
    nom: 'Bourgogne-Franche-Comté',
    villes: ['Dijon', 'Besançon', 'Beaune', 'Auxerre', 'Mâcon', 'Belfort'],
    intro: 'Domaines viticoles, forêts, patrimoine et industrie : la région se découvre aussi depuis le ciel.',
    besoins: 'Prises de vues de domaines et de propriétés, patrimoine et toitures, sites industriels.',
    contraintes: 'Pour les domaines, les prises de vues sont planifiées selon la saison et la lumière recherchée.',
    focus: ['audiovisuel', 'inspection', 'thermographie', 'chantier'],
  },
  {
    slug: 'centre-val-de-loire',
    nom: 'Centre-Val de Loire',
    villes: ['Orléans', 'Tours', 'Blois', 'Chartres', 'Bourges', 'Amboise'],
    intro: 'Patrimoine, bâtiments agricoles et sites industriels : un territoire où l’image aérienne informe autant qu’elle met en valeur.',
    besoins: 'Patrimoine et monuments, toitures et bâtiments agricoles, centrales solaires, propriétés et domaines.',
    contraintes: 'Les sites patrimoniaux et leurs abords peuvent faire l’objet de restrictions : l’accord du gestionnaire est recherché en amont.',
    focus: ['inspection', 'thermographie', 'audiovisuel', 'chantier'],
  },
  {
    slug: 'corse',
    nom: 'Corse',
    villes: ['Ajaccio', 'Bastia', 'Porto-Vecchio', 'Calvi', 'Bonifacio', 'Corte'],
    intro: 'Littoral, maquis, villages perchés : en Corse, la vue aérienne montre un bien ou un site dans son environnement.',
    besoins: 'Prises de vues de propriétés et de terrains, inspection de toitures et d’ouvrages, suivi de chantiers.',
    contraintes: 'Les missions en Corse sont organisées en séjour, en regroupant plusieurs interventions. Les nombreux espaces protégés sont vérifiés avant chaque vol.',
    focus: ['audiovisuel', 'inspection', 'chantier', 'thermographie'],
  },
];

export const outreMer = {
  intro: 'Sky Solus peut intervenir en outre-mer et à l’international pour des missions planifiées, sous réserve de la faisabilité réglementaire locale.',
  texte: 'Chaque territoire a ses propres règles d’espace aérien et d’autorisation. Nous étudions la mission en amont : matériel à transporter, autorisations, durée sur place et regroupement des interventions pour en maîtriser le coût.',
};
