import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Insta, Spotify, Twitter, YT } from "../../icons/socials";

import { SocialsProps } from "./Socials.types";

export const Socials: React.FC<SocialsProps> = () => {
  return (
    <Flex ml="50px" alignItems="center">
      <Link>
        <Insta />
      </Link>
      <Link ml={4}>
        <Twitter />
      </Link>
      <Link ml={4}>
        <YT />
      </Link>
      <Link ml={4}>
        <Spotify />
      </Link>
    </Flex>
  );
};
