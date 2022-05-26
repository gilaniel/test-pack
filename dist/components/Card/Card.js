import React from 'react';
import { useStyleConfig, Box, forwardRef } from '@chakra-ui/react';
export const Card = forwardRef((props, ref) => {
    const styles = useStyleConfig('Card', props);
    return (React.createElement(Box, { __css: styles, ref: ref, transitionProperty: "common", transitionDuration: "normal", ...props }));
});
//# sourceMappingURL=Card.js.map