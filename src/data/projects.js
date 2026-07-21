// Centralized project data.
// To add a new project: append a new object at the end of PROJECTS.
// `id` must be unique and URL-friendly (used in /projets/:id).

export const CATEGORIES = {
  iut: "Projet à l'IUT",
  hackathon: 'Hackathon — DU Santé',
  personnel: 'Projet personnel',
};

export const PROJECTS = [
  // ------------------- IUT PROJECTS -------------------
  {
    id: 'competition-robots',
    title: 'Gestion de tournois',
    shortDescription:
      "Conception d'une application wep app en Symfony, incluant la conception de la base de données",
    image: '/images/portfolio/competitionRobot.png',
    imageAlt: "Design de l'application",
    tags: ['web', 'PHP', 'SQL', 'Framework', '2ème année'],
    category: 'iut',
    pdfUrl: '/pdf/CompetitionRobot.pdf',
    role: 'Projet en groupe de 6' +
      '\nMon rôle : concevoir les fonctionnalités en PHP',
    duration: '2 semaines entièrement dédiées au projet',
    technologies: ['Symfony', 'PHP', 'Base de données', 'Tailwind'],
    context:
      'Conception d\'une application pour organiser des compétitions de robot.' +
      '\nCe projet avait lieu en fin de semestre de la 2ème année, pour nous permettre de faire une application de bout en bout.',
    longDescription:
      'Une application responsive capable de :' +
      '\n - Organiser des compétitions en mode championnat ou en mode tournoi' +
      '\n - Voir le classement et les rencontres d’une compétiton' +
      '\n - Gérer les différents profils : utilisateurs et les organisateurs',
    technical: [
      'Conception et liaison de la base de données',
      'Développement des fonctionnalités demandées, au fil des itérations',
      'Démo de l\'application',
    ],
    soft: [
      'Méthode agile',
      'Compréhension du Product Owner',
      'Board et burndown chart',
      'Communication en équipe',
    ],
  },
  {
    id: 'gestion-depots',
    title: 'Gestion de dépôt de stockage',
    shortDescription:
      "Prototypage d'une application de gestion de dépôts de stockage et d'approvisionnement",
    image: '/images/portfolio/GestionDepots.png',
    imageAlt: "Schéma UML de l'application gestion de dépots",
    tags: ['UML', 'Gestion', 'Analyse client', '2ème année'],
    category: 'iut',
    pdfUrl: '/pdf/GestionDepots.pdf',
    role: 'Projet en groupe de 5 ' +
      '\n avec cahier des charges',
    duration: '5 semaines',
    technologies: ['BPMN', 'UML de classes', 'Rédaction'],
    context:
      'Prototypage d’une application en UML, permettant de gérer des dépôts de stockage et d’approvisionnement et répondant au cahier des charges.',
    longDescription:
      'Un dossier de GESTION comprenant : ' +
      '\n - Des fiches personas' +
      '\n - Des parcours clients' +
      '\n - Des processus BPMN' +
      '\n - Des maquettes de l\'application' +
      '\n\nUn dossier de CONCEPTION comprenant : ' +
      '\n - Un diagramme de contexte statique' +
      '\n - Des diagrammes de cas d’utilisations' +
      '\n - Des diagrammes de classe' +
      '\n - Des liste d’évènements' +
      '\n - Des liste de scénarios',
    technical: [
      'Modélisation des processus avec le BPMN',
      'Analyse du fonctionnement de l’application',
      'Réalisation de diagramme UML',
    ],
    soft: [
      'Analyse des besoins clients',
      'Travail en équipe',
      'Création de fiches personas et de parcours clients',
    ],
  },
  {
    id: 'labyrinthe',
    title: 'Labyrinthe',
    shortDescription:
      "Conception d'un labyrinthe avec gestion de plusieurs étages et de personnages",
    image: '/images/portfolio/Labyrinthe.png',
    imageAlt: 'Représentation du labyrinthe',
    tags: ['Java', 'UML', 'Markdown', '2ème année'],
    category: 'iut',
    pdfUrl: '/pdf/Labyrinthe.pdf',
    role: 'Projet seul - guidé',
    duration: '3 semaines',
    technologies: ['GitLab', 'Java', 'UML de classes', 'Markdown'],
    context:
      'Conception d’un labyrinthe avec gestion de plusieurs étages et de personnages.' +
      '\nUne base de code était fournie par l\'iut, et des interfaces étaient imposées.',
    longDescription:
      'Un labyrinthe contenant : ' +
      '\n - Des monstres qui se déplacent aléatoirement et de manière fluide' +
      '\n - Un personnage qui peut se déplacer à l’aide des touches du clavier et qui ne voit que les cases proches de lui' +
      '\n - Des déplacements possibles entre différents étages',
    technical: [
      'Développement Java avec une interface graphique',
      'Gestion du polymorphisme : Personnage et monstres',
      'Lecture de données de fichiers texte (labyrinthe)',
      'Apprentissage du Markdown',
    ],
    soft: [
      'Autonomie, apprentissage de nouveaux outils et concepts par moi-même',
      'Résolution de problèmes',
      'Persévérance : avancer dans des niveaux de plus en plus dur',
    ],
  },
  {
    id: 'sae-finale',
    title: 'Application complète',
    shortDescription: "Conception d'une application de génération de graphiques",
    image: null,
    imageAlt: '',
    tags: ['C#', 'Python', 'SQL', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/SAE_Finale.pdf',
    role: 'Projet en groupe de 5' +
      '\nMon rôle : concevoir l\'interface',
    duration: '2 semaines entièrement dédiées au projet',
    technologies: ['Gitlab', 'Visual Studio', 'Python', 'SQL'],
    context:
      'Conception d\'une application complète de génération de graphique à partir de fichier CSV.' +
      '\n Développement la base de données, des algorithmes de création des graphiques, ainsi que l’interface utilisateur.',
    longDescription:
      'Une application capable de : ' +
      '\n - Générer plusieurs types de graphiques' +
      '\n - Importer de nouveaux fichiers CSV pour alimenter la base de données' +
      '\n - Ajouter des tags aux donnée',
    technical: [
      'Gestion du projet',
      'Conception de l’interface humain - machine (IHM)',
      'Démo de l’application',
    ],
    soft: [
      'Dossier de spécifications',
      'Plan de projet avec un diagramme de Gantt',
      'Suivi et pilotage du projet contenant un Copil',
      'Communication en équipe',
    ],
  },
  {
    id: 'visualisation-graphe',
    title: 'Visualisation de graphe',
    shortDescription: "Conception d'une interface de visualisation de graphe",
    image: '/images/portfolio/graphe.png',
    imageAlt: "Interface de visualisation de graphe réalisée en projet d'IUT",
    tags: ['Java', 'UML', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/VisualisationGraphe.pdf',
    role: 'Projet en groupe de 2 - guidé',
    duration: '4 semaines',
    technologies: ['NetBeans', 'Java', 'Gitlab'],
    context:
      'Conception d\'une interface de visualisation de graphique, grâce à l\'implémentation de classes de modélisation.' +
      '\nDéveloppement de deux algorithmes modifiant les graphes.' +
      '\nUne base de code était fournie par l\'iut.',
    longDescription:
      'Visualisation du graphe fonctionnelle' +
      '\nPossibilité de modifier les graphes avec les algorithmes développés',
    technical: [
      'Programmation en java',
      'Diagramme UML',
      'Implémentation de classes à partir d’interfaces existantes',
      'Réalisation de tests unitaires',
      'Analyse de la complexité des algorithmes développés avec un benchmark',
    ],
    soft: [
      'Répartition des tâches',
      'Planification du travail',
      'Adaptabilité aux difficultés',
    ],
  },
  {
    id: 'iacademy-of-doom',
    title: 'Simulation défensive',
    shortDescription: "Développement d'un jeu de construction défensive et de simulation",
    image: '/images/portfolio/IAcademyOfDoom.png',
    imageAlt: 'Interface du jeu de simulation défensive',
    tags: ['C#', 'UML', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/IAcademyOfDoom.pdf',
    role: 'Projet en groupe de 3 - guidé',
    duration: '4 semaines',
    technologies: ['Visual Studio', 'C#', 'Gitlab'],
    context:
      'Une application de jeu fonctionnelle nous était donnée. Le but était d\'améliorer l\'interface et d\'ajouter des fonctionnalités au jeu.' +
      '\n Les fonctionnalités à implémenter était découpés 3 :' +
      '\n - Principales' +
      '\n - Secondaires' +
      '\n - Refontes graphiques' +
      '\nUne base de code était fournie par l\'iut.',
    longDescription:
      'Fonctionnalités principales implémentées avec succès.' +
      '\nAmélioration de l\'interface utilisateur (refonte graphique).',
    technical: [
      'Programmation en C#',
      '1ère utilisation de git en groupe avec des branches',
      'Manipulation d’une interface graphique',
      'Elaboration dediagramme UML',
    ],
    soft: [
      'Travail d’équipe - Collaboration',
      'Communication - Partage d’idées et de solutions ',
      'Lecture et compréhension d’un code existant',
    ],
  },
  {
    id: 'fibro-sphere',
    title: 'FibroSphère — Site Web',
    shortDescription: "Création d'un site web sur le thème de la santé et bien-être",
    image: '/images/portfolio/siteWeb.png',
    imageAlt: 'Design du site Web FibroSphère sur le thème de la santé',
    tags: ['HTML / CSS', 'web', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/FibroSphere.pdf',
    role: 'Projet seul',
    duration: '5 semaines',
    technologies: ['HTML / CSS', 'VS Code', 'Balsamiq', 'Gitlab'],
    context:
      'Conception d\'un site web sur le thème de la santé et du bien-être avec aucune compétence en Javascript, ni aucun framework.' +
      '\n Le site est donc fait avec seulement des connaissances élémentaires en HTML et CSS.' +
      '\n Ce projet correspond à l\'un de nos premiers réalisés à l\'IUT.',
    longDescription:
      'Un site web, pour une association fictive, donnant accès à 5 pages : ' +
      '\n - page d\'accueil' +
      '\n - page de description plus précises des actions de l\'association' +
      '\n - page contenant un formulaire (purement du front-end)' +
      '\n - page "coming soon"' +
      '\n - page de mentions légales',
    technical: [
      'Maitrise de base du HTML /CSS',
      'Intégration d’un site web fidèle à la maquette',
      'Gestion du responsive',
      'Manipulation de VScode et Gitlab',
    ],
    soft: [
      'Réflexion UX - Besoins de l’utilisateur',
      'Analyse des cibles et création de fiches personas',
      'Réalisation d’une maquette',
    ],
  },
  {
    id: 'lowatem',
    title: "Création d'un jeu vidéo",
    shortDescription: "Réalisation d'un jeu de plateau avec règles spécifiques",
    image: '/images/portfolio/Lowatem.png',
    imageAlt: 'Aperçu du jeu Lowatem, plateau avec jetons et cases',
    tags: ['Java', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/Lowatem.pdf',
    role: 'Projet seul - guidé',
    duration: '4 semaines',
    technologies: ['NetBeans', 'Java', 'Gitlab'],
    context:
      'Une base de code était fournie par l\'iut. Le jeu était fonctionnel mais peu intéressant. Le but était donc d\'ajouter des foncitionnalités.' +
      '\nOn ne pouvait pas passer à la fonctionnalité suivante, tant que la fonctionnalité n\'avait pas été validée. Les fonctionnalités / niveaux à ajouter était de plus en plus complexe à réaliser.',
    longDescription:
      'Jeu avec 11 niveaux fonctionnelles sur les 14 demandées.' +
      '\nRespect des mécaniques prévues pour chaque niveau.',
    technical: [
      'Manipulation avancée des classes Java',
      'Gestion de tableaux de plateau 2D',
      'Maîtrise du git : seul et sans branche',
    ],
    soft: [
      'Gestion du temps',
      'Persévérance (des niveaux de plus en plus complexe)',
      'Amélioration de mon organisation et méthode de travail grâce à Git',
      'Séparation les objectifs en petites fonctions avec des tests indépendants pour mieux atteindre l\'objectif final',
    ],
  },

  // ------------------- HACKATHONS -------------------
  {
    id: 'hackathon-s2',
    title: 'Hackathon S2 — Détecteur de fumée',
    shortDescription: "Conception d'un boîtier détecteur de fumée",
    image: '/images/portfolio/hackathon_s2.jpg',
    imageAlt: 'Aperçu du boîtier permettant de détecter la fumée de cigarette',
    tags: ['Arduino', 'Automatisation', 'Capteur'],
    category: 'hackathon',
    pdfUrl: '/pdf/Hackathon_s2.pdf',
    role: 'Projet en groupe de 3 \n GEII, MP et Informatique',
    duration: '1 semestre',
    technologies: ['Arduino', 'TIA Portal', 'Capteurs'],
    context:
      'Conception d\'un boîtier contenant des capteurs permettant de détecter la présence nocive de fumée de cigarette.',
    longDescription:
      'Boîtier fonctionnel capable de mesurer : ' +
      '\n - la température avec le capteur MKR ENV Shield R2' +
      '\n - le monoxyde de carbone (CO) et les composés organiques volatiles (COV) avec le capteur Grove Multichannel Gas Sensor' +
      '\n - les particules fines avec le capteur Grove - Laser PM2.5 Sensor (HM3301)',
    technical: [
      'Maîtrise des librairies Arduino',
      'Exploitation de datasheet',
      'Programmation en GRAFCET',
      'Programmation en LADDER',
    ],
    soft: [
      'Répartition des tâches selon les compétences',
      'Travail en équipe pluridisciplinaire',
      'Présentation et explication du projet final',
    ],
  },
  {
    id: 'hackathon-s1',
    title: 'Hackathon S1 — Main robotisée',
    shortDescription: "Conception d'une main robotisée",
    image: '/images/portfolio/mainRobotisée.jpg',
    imageAlt: 'Résultat de la main robotisée finale',
    tags: ['Arduino', '3D', 'Capteur'],
    category: 'hackathon',
    pdfUrl: '/pdf/Hackathon_s1.pdf',
    role: 'Projet séparé en 2 groupe : ' +
      '\n un sur les capteurs (mon rôle)' +
      '\n un sur la robotique de la main',
    duration: '1 semestre',
    technologies: ['Arduino', 'Catia', 'Datasheet', 'C++'],
    context:
      'Ce projet était un projet réalisé au sein du DU "Technologies aux service de la santé", dans lequel des étudiants de différents départements de l\'IUT travaillent ensemble (GEII, Mesures Physique, Informatique,...).' +
      ' Ce projet était réalisé avec des étudiants du DU "Robotique".' +
      '\n Les étudiants de robotique s\'occupait de faire fonctionner la main avec un joystick, et nous de récupérer les données des capteurs placés sur notre main. Lors d\'un hackathon, nous avons ensuite dû combiner les projets pour utiliser les signaux des capteurs de la main afin de faire bouger la main mécanique sans le joystick.',
    longDescription:
      'Création d’une main robotisée fonctionnelle dont la moitié des doigts réagissent aux mouvements du gant, grâce à l\'exploitation de capteurs de flexion.',
    technical: [
      'Programmation en C++',
      'Apprentissage de la modélisation 3D',
      'Exploitation de datasheet',
      'Assemblage de programmes des deux groupes',
    ],
    soft: [
      'Travail d’équipe',
      'Résolution de problèmes',
      'Autonomie et adaptabilité',
    ],
  },

  // ------------------- PERSONAL PROJECTS -------------------
  {
    id: 'woofing-angleterre',
    title: 'Woofing — Angleterre',
    shortDescription: "Découverte de l'agriculture paysanne et durable",
    image: '/images/portfolio/woofing_angleterre.jpg',
    imageAlt: "Photo de la ferme d'accueil lors du Woofing en Angleterre",
    tags: ['Anglais', 'Écologie'],
    category: 'personnel',
    pdfUrl: '/pdf/Woofing_Angleterre.pdf',
    role: 'Séjour au sein d\'une communauté d\'environ 10 personnes',
    duration: '10 jours',
    technologies: ['Immersion linguistique', 'Travail collaboratif', 'Pratique'],
    context:
      'Voyage pour découvrir l’agriculture paysanne et durable tout en améliorant mon anglais.' + 
      '\n Le but de ce voyage était d\'apprendre des pratiques durables et de découvrir la vie en communauté.' + 
      '\n\n Description du Woofing : similaire au séjour "fille au père", le woofing est un séjour durant lequel on est nourri et logé et où l\'on doit participer aux activités de la famille durant 5 jours dans la semaine. Le Woofing est axé sur l\'agriculture ou les principes écologiques.',
    longDescription:
      'Cette expérience m\'a permis d\'entrer dans le milieu de l\'environnement, ce qui accentue ma motivation pour travailler dans une entreprise engagée, dans l\'environnement ou dans d\'autres domaines.',
    technical: [
      'Initiation aux principes de la permaculture',
      'Gestion durable d’une petite ferme',
      'Communication en anglais - principalement de l’écoute',
    ],
    soft: [
      'Adaptabilité dans un environnement inconnu',
      'Apprentissage rapide de nouvelles tâches',
      'Travail en autonomie et en équipe',
      'Familiarisation à une vie en communauté',
    ],
  },
];

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}
