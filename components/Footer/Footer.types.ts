import type { HTMLChakraProps } from "@chakra-ui/react";

export interface FooterProps extends HTMLChakraProps<"div"> {
  pages: [
    {
      id: string;
      defaultMessage: string;
      href: string;
      title: string;
    }
  ];
}
