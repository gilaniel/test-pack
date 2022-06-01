import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const disabledStyles = {
  color: "#fff",
  bg: "main.400",
  borderColor: "main.400",
};

const solidVariant: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.500`,
    borderColor: `${c}.500`,
    borderWidth: "2px",
    color: "white",
    _hover: {
      bg: `${c}.400`,
      borderColor: `${c}.400`,
      _disabled: disabledStyles,
    },
    _active: {
      bg: `${c}.600`,
      borderColor: `${c}.600`,
    },
    _focus: {
      bg: `${c}.600`,
      ring: 0,
    },
  };
};

const ghostVariant: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.500`,
    bg: "transparent",
    borderColor: `${c}.500`,
    borderWidth: "2px",
    _hover: {
      color: `#fff`,
      bg: "main.500",
    },
    _focus: {
      color: `#fff`,
      bg: "main.600",
      ring: 0,
    },
    _active: {
      color: `#fff`,
      bg: "main.600",
    },
    _disabled: {
      bg: "#fff",
      color: "main.400",
    },
  };
};

const noBordVariant: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    color: `${c}.500`,
    bg: "transparent",
    borderColor: `transparent`,
    borderWidth: "2px",
    _focus: {
      ring: 0,
    },
    _disabled: {
      bg: "transparent",
      borderColor: `transparent`,
    },
  };
};

export default {
  variants: {
    solid: solidVariant,
    ghost: ghostVariant,
    nobord: noBordVariant,
  },
  baseStyle: {
    borderRadius: "4px",
    fontWeight: "medium",
    _disabled: {
      color: "#fff",
      bg: "main.400",
      borderColor: "main.400",
    },
    ".chakra-button__icon": {
      ":first-of-type:not(:last-of-type)": {
        marginStart: -1.5,
      },
      ":last-of-type:not(:first-of-type)": {
        marginEnd: -1.5,
      },
    },
  },
  sizes: {
    md: {
      fontSize: "14px",
      px: 6,
      py: 3,
      lineHeight: 5,
    },
    sm: {
      fontSize: "14px",
      px: 4,
      py: 2,
      lineHeight: 5,
    },
    xs: {
      fontSize: "14px",
      px: 3,
      py: 1.5,
      lineHeight: 5,
    },
  },
  defaultProps: {
    colorScheme: "main",
  },
};
