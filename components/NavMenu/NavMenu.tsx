import React from "react";

import {
  chakra,
  useMultiStyleConfig,
  useStyles,
  StylesProvider,
} from "@chakra-ui/react";

import type { NavMenuProps, NavMenuItemProps } from "./NavMenu.types";

export const NavMenu: React.FC<NavMenuProps> = ({ children, ...props }) => {
  const styles = useMultiStyleConfig("NavMenu", {});

  return (
    <chakra.ul __css={styles.menu} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </chakra.ul>
  );
};

export const NavMenuItem: React.FC<NavMenuItemProps> = (props) => {
  const styles = useStyles();
  return <chakra.li __css={styles.item} {...props} />;
};
