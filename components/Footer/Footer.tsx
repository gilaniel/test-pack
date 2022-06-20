import React from "react";
import { Flex, Link, List, ListItem } from "@chakra-ui/react";

import { Socials } from "../";
import { FooterProps } from "./Footer.types";

export const Footer: React.FC<FooterProps> = ({ pages }) => {
  return (
    <Flex px={8} py={8} justifyContent="space-between" alignItems="center">
      <List display="flex" fontSize="12px">
        {pages.map((item, i) => (
          <ListItem key={i} color="gray.100" mr={6}>
            <Link href={item.href}>{item.title}</Link>
          </ListItem>
        ))}
      </List>

      <Flex alignItems="center">
        <Socials />
      </Flex>
    </Flex>
  );
};
