import type { SystemStyleObject } from '@chakra-ui/react';

export default {
  sizes: {
    base: {
      minW: 'auto',
      minH: 'auto',
      w: 'auto',
      h: 'auto',
    },
    lg: {
      h: 14,
      w: 14,
    },
    md: {
      w: 12,
      h: 12,
    },
    sm: {
      h: 10,
      w: 10,
    },
    xs: {
      h: 8,
      w: 8,
    },
  },
  defaultProps: {
    size: 'base',
  },
} as SystemStyleObject;
