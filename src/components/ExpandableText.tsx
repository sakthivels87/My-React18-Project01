import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expandable, setExpandable] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expandable ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}{" "}
        <Button
          colorScheme="orange"
          size="sm"
          marginStart={2}
          onClick={() => setExpandable(!expandable)}
        >
          {expandable ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
