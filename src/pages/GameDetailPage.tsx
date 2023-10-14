import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGame(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
