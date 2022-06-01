export default {
  baseStyle: {
    control: {
      bg: "white",
      borderRadius: "base",
      borderWidth: "2px",
      borderColor: "black.100",
      _checked: {
        _disabled: {
          bg: "gray.200",
          color: "gray.300",
        },
        _readOnly: {
          bg: "main.300",
          borderColor: "main.300",
        },
      },
      _disabled: {
        bg: "gray.200",
      },
      _focus: {
        ring: 0,
      },
      _readOnly: {
        bg: "gray.50",
      },
    },
  },
  sizes: {
    md: {
      control: {
        w: "18px",
        h: "18px",
      },
      icon: {
        fontSize: "0.65rem",
      },
    },
  },
  defaultProps: {
    colorScheme: "main",
  },
};
