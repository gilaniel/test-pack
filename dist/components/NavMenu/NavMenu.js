import React from "react";
import { chakra, useMultiStyleConfig, useStyles, StylesProvider, } from "@chakra-ui/react";
export const NavMenu = ({ children, ...props }) => {
    const styles = useMultiStyleConfig("NavMenu", {});
    return (React.createElement(chakra.ul, { __css: styles.menu, ...props },
        React.createElement(StylesProvider, { value: styles }, children)));
};
export const NavMenuItem = (props) => {
    const styles = useStyles();
    return React.createElement(chakra.li, { __css: styles.item, ...props });
};
//# sourceMappingURL=NavMenu.js.map