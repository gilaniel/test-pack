import React from "react";
import { Flex, Link, List, ListItem } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import footerPages from "../../content/footerPages";

import { Socials } from "../";

export const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <Flex px={8} py={8} justifyContent="space-between" alignItems="center">
      <List display="flex" fontSize="12px">
        {footerPages.map((item, i) => (
          <ListItem key={i} color="gray.100" mr={6}>
            <Link>{formatMessage(item)}</Link>
          </ListItem>
        ))}
      </List>

      <Flex alignItems="center">
        <Socials />
      </Flex>
    </Flex>
  );
};
