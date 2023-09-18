import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
