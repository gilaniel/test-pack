export default {
  baseStyle: {
    overlay: {
      backdropFilter: 'blur(4px)',
    },
    closeButton: {
      bg: 'white',
      boxShadow: 'lg',
      top: -2,
      insetEnd: -2,
      color: 'gray.500',
      _focus: {
        ring: 0,
        border: 'none',
        boxShadow: 'lg', 
      },
      _hover: {
        bg: 'gray.200',
      },
      _active: {
        bg: 'gray.300',
      },
    },
  },
};
