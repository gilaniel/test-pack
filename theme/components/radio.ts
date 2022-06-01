export default {
  baseStyle: {
    control: {
      border: "2px",
      borderColor: "black.100",
      transition: "all .25s ease",
      _checked: {
        bg: "transparent",
        color: "main.500",
        _before: {
          w: "10px",
          h: "10px",
        },
        _hover: {
          bg: "transparent",
        },
      },
      _hover: {
        bg: "transparent",
        borderColor: "main.500",
      },
      _focus: {
        ring: 0,
      },
    },
  },
  sizes: {
    md: {
      control: {
        w: "20px",
        h: "20px",
      },
    },
  },
  defaultProps: {
    colorScheme: "main",
  },
};
