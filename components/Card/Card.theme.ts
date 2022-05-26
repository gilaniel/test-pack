import type { SystemStyleObject } from '@chakra-ui/react';

export default {
  baseStyle: {
    background: 'white',
  },
  sizes: {
    sm: {
      // px: 5,
      // py: 4,
      p: 5,
      borderRadius: '8px',
      // boxShadow: 'sm',
      border: '1px solid',
      borderColor: 'gray.50'
    },
    md: {
      p: 6,
      borderRadius: '8px',
      // boxShadow: 'md',
      border: '1px solid',
      borderColor: 'gray.50'
    },
    lg: {
      // px: 8,
      // py: 7,
      p: 8,
      borderRadius: '8px',
      // boxShadow: 'lg',
      border: '1px solid',
      borderColor: 'gray.50'
    }
  },
  defaultProps: {
    size: 'md',
  },
} as SystemStyleObject;
