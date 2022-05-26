export default {
  baseStyle: {
    control: {
      border: '1px',
      _checked: {
        bg: 'white',
        color: 'main.500',
        _before: {
          w: '45%',
          h: '45%',
        },
      },
      _focus: {
        ring: 0,
      },
    },
  },
  sizes: {
    md: {
      control: {
        w: 6,
        h: 6,
      },
    },
  },
  defaultProps: {
    colorScheme: 'main',
  },
};
