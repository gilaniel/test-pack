import React from 'react';
import { useStyleConfig, IconButton as ChakraIconButton, useButtonGroup, forwardRef, } from '@chakra-ui/react';
export const IconButton = forwardRef((props, ref) => {
    const group = useButtonGroup();
    const styles = useStyleConfig('IconButton', { ...group, ...props });
    return React.createElement(ChakraIconButton, { ref: ref, sx: styles, ...props });
});
//# sourceMappingURL=IconButton.js.map