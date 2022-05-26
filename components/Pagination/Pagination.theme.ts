import type { SystemStyleObject } from "@chakra-ui/react";

export default {
  parts: ["item"],
  baseStyle: {
    item: {
      "> div": {
        py: 1,
        px: "6px",
        ml: 0.5,
        mr: 0.5,
        color: "gray.100",
        cursor: "pointer",
      },
      "& .active, & .page-btn": {
        color: "main.500",
        textTransform: "uppercase",
        cursor: "pointer",
      },
      "& .active": {
        cursor: "default",
      },
      "& .page-btn": {
        ml: 3,
        mr: 3,
        "&:first-of-type": {
          ml: 0,
        },
        "&:last-child": {
          mr: 0,
        },
      },
    },
  },
} as SystemStyleObject;
