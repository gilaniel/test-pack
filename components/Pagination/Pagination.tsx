import React from "react";

import { chakra, StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";

import type { PaginationProps } from "./Pagination.types";

export const Pagination: React.FC<PaginationProps> = ({
  children,
  ...props
}) => {
  const styles = useMultiStyleConfig("Pagination", {});
  return (
    <chakra.div __css={styles.item} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </chakra.div>
  );
};
