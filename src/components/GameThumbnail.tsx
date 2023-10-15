import React from "react";
import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}
const GameThumbnail = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((t) => (
        <Image key={t.id} src={t.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameThumbnail;
