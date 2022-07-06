import { mode, transparentize } from "@chakra-ui/theme-tools";

export default {
  variants: {
    subtle: (props) => {
      const { colorScheme: c, theme } = props;
      const darkBg = transparentize(`${c}.200`, 0.16)(theme);
      return {
        container: {
          bg: mode(`${c}.950`, darkBg)(props),
          color: mode(`${c}.900`, `${c}.200`)(props),
        },
      };
    },
  },
  sizes: {
    md: {
      container: {
        fontSize: "body2",
        lineHeight: "body2",
        borderRadius: "4px",
        fontWeight: "normal",
        px: 2,
        py: 1.5,
      },
    },
  },
};
