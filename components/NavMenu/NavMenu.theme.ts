import type { SystemStyleObject } from "@chakra-ui/react";

export default {
  parts: ["menu", "item", "link"],
  baseStyle: {
    menu: {
      listStyle: "none",
      my: 3,
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
      color: "black.100",
      mb: 1,
      borderRadius: "8px",
      fontSize: "sub2",
      fontWeight: "medium",
      lineHeight: "sub2",
      transition: "background .2s ease-in-out",
      _focus: {
        boxShadow: "none",
      },
      _hover: {
        bg: "main.100",
        color: "main.500",
      },
      "&.active": {
        bg: "main.100",
        color: "main.500",
      },
      "& svg > path": {
        stroke: "none",
      },
    },
  },
} as SystemStyleObject;
