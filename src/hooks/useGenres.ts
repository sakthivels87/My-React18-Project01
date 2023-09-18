import useData from "./useData";
import genre from "../data/Genre";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
interface Genres {
  count: number;
  results: Genre[];
}

//const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: genre, isLoading: false, error: null });
export default useGenres;
