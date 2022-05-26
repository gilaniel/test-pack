import inputStyles from "./input";

export default {
  baseStyle: {
    icon: {
      color: "gray.400",
      w: "2rem",
      fontSize: "3xl",
    },
  },
  sizes: inputStyles.sizes,
  variants: {
    outline: {
      field: {
        border: "1px solid",
        borderColor: "gray.50",
        background: "white",
        color: "gray.500",
        _placeholder: {
          color: "gray.500",
        },
        _hover: {
          borderColor: "main.200",
        },
        _focus: {
          background: "white",
          borderColor: "main.200",
          zIndex: 5,
          ring: 0,
        },
        _disabled: {
          borderColor: "gray.300",
        },
        _readOnly: {
          bg: "gray.50",
          color: "gray.800",
          _hover: {
            borderColor: "gray.300",
          },
          _focus: {
            borderColor: "gray.300",
          },
        },
      },
      addon: {
        border: "1px solid",
        borderColor: "gray.300",
        color: "gray.400",
      },
    },
  },
  defaultProps: {
    variant: "outline",
    colorScheme: "main",
  },
};
