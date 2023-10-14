import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenereList from "../components/GenreList";
import GameGrid from "../components/GameGrid";
import PlatformFilter from "../components/PlatformFilter";
import SortingOrder from "../components/SortingOrder";
import GameHeading from "../components/GameHeading";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      h="200px"
      gap="1"
      fontWeight="bold"
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenereList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={10}>
          <GameHeading />
          <Flex gap={5}>
            <PlatformFilter />
            <SortingOrder />{" "}
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
