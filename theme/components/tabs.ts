const buttonVariant = {
  tab: {
    bg: 'white',
    _notFirst: {
      borderLeftWidth: '1px',
      borderLeftColor: '#EDEDED',
    },
    _first: {
      borderTopLeftRadius: 'base',
      borderBottomLeftRadius: 'base',
    },
    _last: {
      borderTopRightRadius: 'base',
      borderBottomRightRadius: 'base',
    },
    _notLast: {
      marginEnd: '-1px',
    },
    _selected: {
      borderLeftColor: 'transparent',
      fontWeight: 'semibold',
      bg: 'main.500',
      color: 'white',
    },
    _focus: {
      boxShadow: 'inherit',
    },
  },
  tablist: {
    display: 'inline-flex',
    boxShadow: 'base',
    borderRadius: 'base',
  },
  tabpanel: {
    p: 0,
  },
};

const iconButtonVariant = {
  ...buttonVariant,
  tab: {
    ...buttonVariant.tab,
    'svg > path': {
      fill: 'gray.500',
    },
    _selected: {
      ...buttonVariant.tab._selected,
      'svg > path': {
        fill: 'white',
      },
    },
  },
};

const filterVariant = {
  tab: {
    bg: 'white',
    borderWidth: '1px',
    borderColor: 'transparent',
    fontWeight: 'semibold',
    fontSize: 'base',
    color: 'gray.600',
    _notFirst: {
      borderLeftColor: 'gray.300',
    },
    _first: {
      borderTopLeftRadius: 'lg',
      borderBottomLeftRadius: 'lg',
    },
    _last: {
      borderTopRightRadius: 'lg',
      borderBottomRightRadius: 'lg',
    },
    _notLast: {
      marginEnd: '-1px',
    },
    _selected: {
      borderColor: 'main.500',
      bg: 'white',
      color: 'gray.900',
      '& + button': {
        borderLeftColor: 'main.500',
      },
    },
    _focus: {
      boxShadow: 'inherit',
    },
  },
  tablist: {
    boxShadow: 'md',
    borderRadius: 'lg',
  },
  tabpanel: {
    p: 0,
  },
};

const linkVariant = {
  tab: {
    p: 0,
    _notLast: {
      marginEnd: 4,
    },
    _selected: {
      color: 'main.600',
      textDecoration: 'underline',
      fontWeight: 'semibold',
    },
    _focus: {
      ring: 0,
    },
  },
  tabpanel: {
    p: 0,
  },
};

const underscoreVariant = {
  tab: {
    p: 0,
    color: 'gray.500',
    _notLast: {
      marginEnd: 7,
    },
    _selected: {
      color: 'main.600',
      borderBottom: '2px',
      fontWeight: 'semibold',
      borderRadius: '1px',
      pb: '2px'
    },
    _focus: {
      ring: 0,
    },
  },
  tabpanel: {
    p: 0,
  },
};

export default {
  variants: {
    button: buttonVariant,
    'icon-button': iconButtonVariant,
    filter: filterVariant,
    link: linkVariant,
    underscore: underscoreVariant,
  },
  sizes: {
    md: {
      tab: {
        fontSize: 'md',
        px: 5,
        py: 3,
      },
    },
    lg: {
      tab: {
        px: 5,
        py: 5,
      },
    },
  },
};
