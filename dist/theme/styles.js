export default {
    global: ({ colorMode }) => ({
        body: {
            bg: colorMode === "light" ? "main.50" : "gray.900",
        },
        form: {
            w: "full",
        },
    }),
};
//# sourceMappingURL=styles.js.map