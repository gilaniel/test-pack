export default {
  variants: {
    simple: {
      th: {
        // fontFamily: "heading",
        fontWeight: "normal",
        textTransform: "none",
        letterSpacing: "normal",
        color: "gray.100",
        borderBottom: "none",
      },
      td: {
        borderBottom: "none",
      },
      tbody: {
        tr: {
          _hover: {
            borderColor: "gray.200",
          },
        },
      },
    },
  },
  sizes: {
    md: {
      th: {
        py: 0,
        fontSize: "cap2",
        lineHeight: 5,
      },
      td: {
        fontSize: "body2",
      },
    },
  },
};
