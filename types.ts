export interface Series {
  slug: string;
  title: string;
  genre: Array<string>;
  platform: string;
  thumbnail: string;
  seasons: number;
  banner: string;
  description: string;
  logo: string;
  platformSlug: string;
  link?: string;
  isActive?: boolean;
}

export interface Platforms {
  name: string;
  logo: string;
  color: string;
  slug: string;
}
