import type { SystemStyleObject } from "@chakra-ui/react";

export default {
  parts: ["menu", "item", "link"],
  baseStyle: ({ colorMode }) => ({
    menu: {
      listStyle: "none",
      mx: 3,
    },
    item: {
      "& ul": {
        mt: 3,
        ml: 9,
        "& > li": {
          _notLast: {
            mb: 3,
          },
        },
      },
    },
    link: {
      color: colorMode === "dark" ? "black.300" : "black.100",
      mb: "2px",
      borderRadius: "8px",
      fontSize: "sub2",
      fontWeight: "medium",
      lineHeight: "sub2",
      transition: "background .2s ease-in-out",
      _focus: {
        boxShadow: "none",
      },
      _hover: {
        bg: colorMode === "dark" ? "gradients.300" : "main.100",
        color: colorMode === "dark" ? "white" : "main.500",
      },
      "&.active": {
        bg: colorMode === "dark" ? "gradients.300" : "main.100",
        color: colorMode === "dark" ? "white" : "main.500",
      },
      "& svg > path": {
        stroke: "none",
      },
    },
  }),
} as SystemStyleObject;
