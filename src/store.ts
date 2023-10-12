import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrdering: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { search: searchText } })),
  setOrdering: (sortOrder) =>
    set(() => ({ gameQuery: { ordering: sortOrder } })),
}));

export default useGameQueryStore;
