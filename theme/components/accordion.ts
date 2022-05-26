import type { SystemStyleObject } from '@chakra-ui/theme-tools'

const landingVariant: SystemStyleObject = {
  container: {
    borderColor: 'gray.300',
    borderRadius: 'xl',
    mt: 5,
    overflow: 'hidden',
    borderWidth: '1px',
  },
  button: {
    p: {base: 4, lg: 6},
    justifyContent: 'space-between',
    _hover: {bg: 'white'},
    _focus: {
      ring: 0
    }
  },
  panel: {
    px: {base: 4, lg: 6},
    pt: 0,
  },
}

export default {
  variants: {
    landing: landingVariant,
  },
}
