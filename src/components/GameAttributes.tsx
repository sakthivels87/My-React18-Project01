import React from "react";
import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/layout";
import DefinitionItem from "./DefinitionItem";
import ScoreBadge from "./ScoreBadge";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaScore">
        <ScoreBadge score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {game?.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
