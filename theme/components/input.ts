export default {
  baseStyle: {
    addon: {
      userSelect: "none",
    },
  },
  sizes: {
    md: {
      field: {
        h: 12,
        px: 0,
        py: 0,
        borderRadius: "4px",
        fontSize: "14px",
        zIndex: 5,
        background: "white!important",
      },
      addon: {
        h: 12,
        px: 0,
        py: 0,
        borderRadius: "4px",
        background: "white",
      },
    },
  },
  variants: {
    filter: {
      field: {
        color: "gray.500",
        _hover: {
          color: "gray.900",
        },
        _focus: {
          color: "gray.900",
        },
        _disabled: {
          color: "gray.400",
        },
      },
    },
    outline: {
      field: {
        border: "1px solid",
        borderColor: "gray.50",
        color: "gray.500",
        _placeholder: {
          color: "gray.500",
        },
        _hover: {
          borderColor: "main.200",
        },
        _focus: {
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
        _invalid: {
          borderColor: "red.300",
          boxShadow: "none",
          _focus: {
            borderColor: "red.300",
            boxShadow: "none",
          },
        },
        _valid: {
          borderColor: "green.300",
          boxShadow: "none",
          _focus: {
            borderColor: "green.300",
            boxShadow: "none",
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
