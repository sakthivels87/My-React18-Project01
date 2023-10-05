import { useQuery } from "@tanstack/react-query";
import platforms from "../data/Platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

/*const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  errors: null,
});*/

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });

export default usePlatforms;
