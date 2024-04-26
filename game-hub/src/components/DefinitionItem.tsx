import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IDefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

export const DefinitionItem = ({ term, children }: IDefinitionItemProps) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
