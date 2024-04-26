import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface IExpandableTextProps {
  children?: string;
  limit?: number;
}

export const ExpandableText = ({
  children,
  limit = 300,
}: IExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limit) return <Text>{children} </Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size={"xs"}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};
