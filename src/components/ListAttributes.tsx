import { Box, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import React from "react";
import { Platform } from "../entities/Platform";

interface Props {
  title: string;
  list: Platform[];
}
const ListAttributes = ({ title, list }: Props) => {
  return (
    <Box marginY={3}>
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <List spacing={2}>
        {list.map((item) => (
          <ListItem key={item.name}>{item.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListAttributes;
