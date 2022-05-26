import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const solidVariant: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.200`,
    color: `${c}.300`,
    fontWeight: "normal",
    textTransform: "none",
    borderRadius: "4px",
    lineHeight: "cap2",
    px: 2,
    py: "2px",
  };
};

export default {
  variants: {
    solid: solidVariant,
  },
  baseStyle: {
    color: `#FAF`,
  },
  defaultProps: {
    colorScheme: "main",
  },
};
