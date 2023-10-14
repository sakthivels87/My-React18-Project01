import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGame(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
