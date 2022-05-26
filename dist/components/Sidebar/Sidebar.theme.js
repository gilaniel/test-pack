export default {
    baseStyle: ({ colorMode }) => ({
        position: "fixed",
        left: 0,
        px: 3,
        py: 6,
        height: "100%",
        bg: colorMode === "light" ? "main.50" : "gray.900",
        transition: "background .2s ease",
    }),
};
//# sourceMappingURL=Sidebar.theme.js.map