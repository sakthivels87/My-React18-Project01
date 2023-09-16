import useData from "./useData";

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

const useGenres = () => useData<Genre>("/genres");
export default useGenres;
