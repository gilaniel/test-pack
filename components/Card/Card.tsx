import React from 'react';

import { useStyleConfig, Box, forwardRef } from '@chakra-ui/react';

import type { CardProps } from './Card.types';

export const Card = forwardRef<CardProps, 'div'>((props, ref) => {
  const styles = useStyleConfig('Card', props);
  return (
    <Box
      __css={styles}
      ref={ref}
      transitionProperty="common"
      transitionDuration="normal"
      {...props}
    />
  );
});
