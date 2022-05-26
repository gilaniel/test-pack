import { mode, transparentize } from "@chakra-ui/theme-tools";

export default {
  variants: {
    subtle: (props) => {
      const { colorScheme: c, theme } = props;
      const darkBg = transparentize(`${c}.200`, 0.16)(theme);
      return {
        container: {
          bg: mode(`${c}.300`, darkBg)(props),
          color: mode(`${c}.900`, `${c}.200`)(props),
        },
      };
    },
  },
  sizes: {
    md: {
      container: {
        fontSize: "cap2",
        lineHeight: "cap2",
        borderRadius: "base",
        px: 2,
        py: 1,
      },
    },
  },
};
