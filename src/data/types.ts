export interface StoreLink {
  label: string;
  url: string;
}

export interface Game {
  title: string;
  slug: string;
  icon?: string;
  links: StoreLink[];
}

export interface Company {
  name: string;
  slug: string;
  logo: string;
  devUrl?: string;
  devUrlLabel?: string;
  games: Game[];
}
