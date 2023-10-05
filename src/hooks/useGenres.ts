import genre from "../data/Genre";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import axios from "axios";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

//const useGenres = () => useData<Genre>("/genres");
//const useGenres = () => ({ data: genre, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });
export default useGenres;
