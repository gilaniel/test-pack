import React from 'react';

import {
  useStyleConfig,
  IconButton as ChakraIconButton,
  useButtonGroup,
  forwardRef,
} from '@chakra-ui/react';

import type { IconButtonProps } from './IconButton.types';

export const IconButton = forwardRef<IconButtonProps, 'button'>((props, ref) => {
  const group = useButtonGroup();
  const styles = useStyleConfig('IconButton', { ...group, ...props });
  return <ChakraIconButton ref={ref} sx={styles} {...props} />;
});
