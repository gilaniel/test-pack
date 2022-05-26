import React from "react";
import { chakra, StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
export const Pagination = ({ children, ...props }) => {
    const styles = useMultiStyleConfig("Pagination", {});
    return (React.createElement(chakra.div, { __css: styles.item, ...props },
        React.createElement(StylesProvider, { value: styles }, children)));
};
//# sourceMappingURL=Pagination.js.map