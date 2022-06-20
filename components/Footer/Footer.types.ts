import type { HTMLChakraProps } from "@chakra-ui/react";

export interface FooterProps extends HTMLChakraProps<"div"> {
  pages: Page[];
}

interface Page {
  id: string;
  defaultMessage: string;
  href: string;
  title: string;
}
