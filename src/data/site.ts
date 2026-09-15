export const site = {
  name: "Ekrem Cicek",
  role: "3D Artist / Game Artist",
  email: "ekrem78ekrem@gmail.com",
  linkedin: "https://www.linkedin.com/in/ekremcicek/",
  url: "https://ekremcicekk.github.io",
  cvUrl: "/cv/ekrem-cicek-cv.pdf",
  description:
    "Portfolio of Ekrem Cicek, a 3D artist and game artist who has shipped dozens of mobile games across Dodo Games, Moondark, Basix Games and Duuby.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Experience", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export interface Platform {
  name: string;
  url: string;
  description: string;
}

export const platforms: Platform[] = [
  {
    name: "Unity Asset Store",
    url: "https://assetstore.unity.com/publishers/78187",
    description: "Unity game templates & asset packages",
  },
  {
    name: "Fab",
    url: "https://www.fab.com/sellers/EKStudio",
    description: "3D models & marketplace assets",
  },
  {
    name: "ArtStation",
    url: "https://www.artstation.com/ekremcicek",
    description: "3D art portfolio",
  },
  {
    name: "Sketchfab",
    url: "https://sketchfab.com/ekstudio",
    description: "Interactive 3D model viewer",
  },
];
