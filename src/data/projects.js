// Centralized project data.
// To add a new project: append a new object at the end of PROJECTS.
// `id` must be unique and URL-friendly (used in /projets/:id).

export const CATEGORIES = {
  iut: "Projets à l'IUT",
  hackathon: 'Hackathon — DU Santé',
  personnel: 'Projets personnels',
};

export const PROJECTS = [
  // ------------------- IUT PROJECTS -------------------
  {
    id: 'gestion-depots',
    title: 'Gestion de dépôt de stockage',
    shortDescription:
      "Prototypage d'une application de gestion de dépôts de stockage et d'approvisionnement",
    image: './images/portfolio/GestionDepots.png',
    imageAlt: "Schéma UML de l'application gestion de dépots",
    tags: ['UML', 'Gestion', 'Analyse client', '2ème année'],
    category: 'iut',
    pdfUrl: '/pdf/GestionDepots.pdf',
  },
  {
    id: 'labyrinthe',
    title: 'Labyrinthe',
    shortDescription:
      "Conception d'un labyrinthe avec gestion de plusieurs étages et de personnages",
    image: './images/portfolio/Labyrinthe.png',
    imageAlt: 'Représentation du labyrinthe',
    tags: ['Java', 'UML', 'Markdown', '2ème année'],
    category: 'iut',
    pdfUrl: '/pdf/Labyrinthe.pdf',
  },
  {
    id: 'sae-finale',
    title: 'Application complète',
    shortDescription: "Conception d'une application de génération de graphiques",
    image: './images/portfolio/competitionRobot.png',
    imageAlt: '',
    tags: ['C#', 'Python', 'SQL', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/SAE_Finale.pdf',
  },
  {
    id: 'visualisation-graphe',
    title: 'Visualisation de graphe',
    shortDescription: "Conception d'une interface de visualisation de graphe",
    image: './images/portfolio/graphe.png',
    imageAlt: "Interface de visualisation de graphe réalisée en projet d'IUT",
    tags: ['Java', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/VisualisationGraphe.pdf',
  },
  {
    id: 'iacademy-of-doom',
    title: 'Simulation défensive',
    shortDescription: "Développement d'un jeu de construction défensive et de simulation",
    image: './images/portfolio/IAcademyOfDoom.png',
    imageAlt: 'Interface du jeu de simulation défensive',
    tags: ['C#', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/IAcademyOfDoom.pdf',
  },
  {
    id: 'fibro-sphere',
    title: 'FibroSphère — Site Web',
    shortDescription: "Création d'un site web sur le thème de la santé et bien-être",
    image: './images/portfolio/siteWeb.png',
    imageAlt: 'Design du site Web FibroSphère sur le thème de la santé',
    tags: ['HTML / CSS', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/FibroSphere.pdf',
  },
  {
    id: 'lowatem',
    title: "Création d'un jeu vidéo",
    shortDescription: "Réalisation d'un jeu de plateau avec règles spécifiques",
    image: './images/portfolio/Lowatem.png',
    imageAlt: 'Aperçu du jeu Lowatem, plateau avec jetons et cases',
    tags: ['Java', '1ère année'],
    category: 'iut',
    pdfUrl: '/pdf/Lowatem.pdf',
  },

  // ------------------- HACKATHONS -------------------
  {
    id: 'hackathon-s1',
    title: 'Hackathon S1 — Main robotisée',
    shortDescription: "Conception d'une main robotisée",
    image: './images/portfolio/mainRobotisée.jpg',
    imageAlt: 'Résultat de la main robotisée finale',
    tags: ['Arduino', '3D', 'Capteur'],
    category: 'hackathon',
    pdfUrl: '/pdf/Hackathon_s1.pdf',
  },
  {
    id: 'hackathon-s2',
    title: 'Hackathon S2 — Détecteur de fumée',
    shortDescription: "Conception d'un boîtier détecteur de fumée",
    image: './images/portfolio/hackathon_s2.jpg',
    imageAlt: 'Aperçu du boîtier permettant de détecter la fumée de cigarette',
    tags: ['Arduino', 'Automatisation', 'Capteur'],
    category: 'hackathon',
    pdfUrl: '/pdf/Hackathon_s2.pdf',
  },

  // ------------------- PERSONAL PROJECTS -------------------
  {
    id: 'woofing-angleterre',
    title: 'Woofing — Angleterre',
    shortDescription: "Découverte de l'agriculture paysanne et durable",
    image: './images/portfolio/woofing_angleterre.jpg',
    imageAlt: "Photo de la ferme d'accueil lors du Woofing en Angleterre",
    tags: ['Anglais', 'Écologie'],
    category: 'personnel',
    pdfUrl: '/pdf/Woofing_Angleterre.pdf',
  },
];

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id);
}
