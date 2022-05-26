import React from "react";

import { chakra, useStyleConfig } from "@chakra-ui/react";

import type { SidebarProps } from "./Sidebar.types";

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const styles = useStyleConfig("Sidebar");
  return <chakra.div __css={styles} {...props} />;
};
