import React from "react";
import { chakra, useStyleConfig } from "@chakra-ui/react";
export const Sidebar = (props) => {
    const styles = useStyleConfig("Sidebar");
    return React.createElement(chakra.div, { __css: styles, ...props });
};
//# sourceMappingURL=Sidebar.js.map