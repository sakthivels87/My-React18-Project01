import useData from "./useData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, isLoading, errors } = useData<Platform>(
    "platforms/lists/parents"
  );
  return { data, errors };
};

export default usePlatforms;
