import { Badge, Stack } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const ScoreBadge = ({ score }: Props) => {
  const colorValue = score >= 80 ? "green" : score < 60 ? "red" : "yellow";
  return (
    <Stack direction="row">
      <Badge
        colorScheme={colorValue}
        fontSize="15px"
        paddingX={1}
        borderRadius="5px"
      >
        {score}
      </Badge>
    </Stack>
  );
};

export default ScoreBadge;
