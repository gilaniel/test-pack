export default {
  global: ({ colorMode }) => ({
    body: {
      bg: colorMode === "light" ? "main.50" : "black.200",
      color: "black.100",
    },
    form: {
      w: "full",
    },
    a: {
      boxShadow: "none",
      _focus: {
        boxShadow: "none!important",
      },
    },
  }),
};
