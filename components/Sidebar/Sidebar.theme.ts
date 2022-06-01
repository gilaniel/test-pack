import type { SystemStyleObject } from "@chakra-ui/react";

export default {
  baseStyle: ({ colorMode }) => ({
    position: "fixed",
    left: 0,
    pb: "100px",
    height: "100%",
    bg: colorMode === "light" ? "main.50" : "black.200",
    transition: "background .2s ease",
    overflow: "auto",
  }),
} as SystemStyleObject;
