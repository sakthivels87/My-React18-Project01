import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const params = useParams();
  const { data: game, isLoading, error } = useGame(params.slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
    </Box>
  );
};

export default GameDetailPage;
