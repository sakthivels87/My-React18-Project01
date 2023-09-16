import LayoutGrid from "./LayoutGrid";
import NavBar from "./NavBar";
import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import GenereList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformFilter from "./components/PlatformFilter";
import SortingOrder from "./components/SortingOrder";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenereList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={10}>
            <Heading>Games</Heading>
            <Flex gap={5}>
              <PlatformFilter
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
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
