import inputStyles from './input';

export default {
  sizes: {
    md: {
      minH: '48px',
    },
  },
  variants: {
    outline: inputStyles.variants.outline.field,
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
