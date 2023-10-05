import genre from "../data/Genre";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const client = new APIClient("/genres");
//const useGenres = () => useData<Genre>("/genres");
//const useGenres = () => ({ data: genre, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });
export default useGenres;
