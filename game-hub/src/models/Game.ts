import { Platform } from "../models/Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
