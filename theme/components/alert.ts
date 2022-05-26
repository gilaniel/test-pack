import {
  mode,
  StyleFunctionProps,
  transparentize,
} from '@chakra-ui/theme-tools'

export default {
  variants: {
    'left-accent': (props: StyleFunctionProps) => {
      const { theme, colorScheme: c } = props
      const lightColor = transparentize(`${c}.500`, 0.01)(theme)
      const darkColor = transparentize(`${c}.500`, 0.05)(theme)

      return {
        container: {
          p: 5,
          bg: 'white',
          paddingStart: 1,
          borderStartWidth: '2px',
          borderStartColor: mode(`${c}.500`, `${c}.200`)(props),
          flexDirection: 'column',
          alignItems: 'start',
          borderRightRadius: 'lg',
          boxShadow: `0px 10px 15px -3px ${lightColor}, 0px 4px 6px -2px ${darkColor}`,
        },
        title: {
          fontWeight: 'bold',
          fontSize: 'sub2',
          lineHeight: 'sub2',
          mb: 1,
        },
        description: {
          fontSize: 'body2',
          lineHeight: 'body2',
        },
        // icon: {
        //   flexShrink: 0,
        //   marginEnd: 3,
        //   w: 5,
        //   h: 6,
        // },
      }
    },
  },
  defaultProps: {
    variant: 'left-accent',
  },
}
