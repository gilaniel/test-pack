import type { StyleFunctionProps } from '@chakra-ui/theme-tools';

export default {
  baseStyle: (props: StyleFunctionProps) => {
    const { colorScheme: c } = props;
    return {
      // fontWeight: 'semibold',
      // color: 'main.600',
      // borderWidth: '1px',
      color: `${c}.600`,
      _hover: {
        color: `${c}.500`,
        textDecoration: 'none',
        // color: 'main.500',
      },
      _active: {
        color: `${c}.500`,
      },
      // _focus: {
      //   display: 'inline-block',
      //   boxShadow: 'none',
      //   // color: 'main.500',
      //   borderColor: 'gray.600',
      //   borderStyle: 'solid',
      //   borderRadius: 'base',
      // },
      // _active: {
      //   color: 'main.500',
      // },
    };
  },
};
