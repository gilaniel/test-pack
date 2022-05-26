import type { SystemStyleObject } from '@chakra-ui/react';

export default {
  parts: ['menu', 'item', 'link'],
  baseStyle: {
    menu: {
      listStyle: 'none',
    },
    item: {
      '& ul': {
        mt: 3,
        ml: 9,
        '& > li': {
          _notLast: {
            mb: 3,
          },
        },
      },
    },
    link: {
      color: '#23262F',
      mb: 1,
      borderRadius: '8px',
      fontSize: 'body2',
      fontWeight: 'bold',
      lineHeight: 'body2',
      transition: 'background .3s ease-in-out',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        bg: 'rgba(85, 66, 246, 0.1)'
      },
      '&.active': {
        bg: 'rgba(85, 66, 246, 0.1)'
      },
      '& svg > path': {
        stroke: 'none',
      },
    },
  },
} as SystemStyleObject;
