import Game from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformListIcons from "./PlatformListIcons";
import ScoreBadge from "./ScoreBadge";
import getCroppedImage from "../services/no-image";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
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
          <Link to={"games/" + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
