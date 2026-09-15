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
  { label: "Games", to: "/games" },
  { label: "Asset Store", to: "/asset-store" },
  { label: "3D Art", to: "/3d-art" },
  { label: "About", to: "/about" },
];

export interface Platform {
  name: string;
  url: string;
  description: string;
}

/** ArtStation, Sketchfab and Fab — shown on the 3D Art page. */
export const threeDPlatforms: Platform[] = [
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
  {
    name: "Fab",
    url: "https://www.fab.com/sellers/EKStudio",
    description: "3D models & marketplace assets",
  },
];

export const unityAssetStoreUrl = "https://assetstore.unity.com/publishers/78187";
