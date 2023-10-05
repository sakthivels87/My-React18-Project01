import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";

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

interface FetchResponse<T> {
  count: number;
  results: Game[];
}
const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.ordering,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGames;
