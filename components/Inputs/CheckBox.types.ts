import type { HTMLChakraProps } from "@chakra-ui/react";

export interface CheckBoxProps extends HTMLChakraProps<"div"> {
  value?: string | number;
}
