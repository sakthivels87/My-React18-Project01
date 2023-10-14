import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  metacritic: number;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}
