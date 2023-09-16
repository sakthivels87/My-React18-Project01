import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const LayoutGrid = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }}
      h="200px"
      gap="1"
      fontWeight="bold"
    >
      <GridItem area="nav"></GridItem>
      <GridItem area={"main"}>Main Box</GridItem>
      <GridItem area={"aside"}>Footer Element</GridItem>
    </Grid>
  );
};

export default LayoutGrid;
