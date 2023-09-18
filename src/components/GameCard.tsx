import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformListIcons from "./PlatformListIcons";
import ScoreBadge from "./ScoreBadge";
import getCroppedImage from "../services/no-image";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} maxHeight="200px" />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformListIcons
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" textAlign="left">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
