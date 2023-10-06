import LayoutGrid from "./LayoutGrid";
import NavBar from "./NavBar";
import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import GenereList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import PlatformFilter from "./components/PlatformFilter";
import SortingOrder from "./components/SortingOrder";
import "./index.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering: string;
  search: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [gameTitle, setGameTitle] = useState("");
  return (
    <div>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, search: searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenereList
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genreId) => {
                setGameQuery({ ...gameQuery, genreId });
              }}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery} />
            <Flex gap={5}>
              <PlatformFilter
                onSelectedPlatform={(platformId) =>
                  setGameQuery({ ...gameQuery, platformId })
                }
                selectedPlatformId={gameQuery.platformId}
              />
              <SortingOrder
                sortOrder={gameQuery.ordering}
                onSelectSort={(sortOrder) =>
                  setGameQuery({ ...gameQuery, ordering: sortOrder })
                }
              />{" "}
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
