export default {
    baseStyle: {
        control: {
            bg: 'white',
            borderRadius: 'base',
            borderWidth: '1px',
            _checked: {
                _disabled: {
                    bg: 'gray.200',
                    color: 'gray.300',
                },
                _readOnly: {
                    bg: 'main.300',
                    borderColor: 'main.300',
                },
            },
            _disabled: {
                bg: 'gray.200',
            },
            _focus: {
                ring: 0,
            },
            _readOnly: {
                bg: 'gray.50',
            },
        },
    },
    sizes: {
        md: {
            control: {
                w: 6,
                h: 6,
            },
            icon: {
                fontSize: '0.75rem',
            },
        },
    },
    defaultProps: {
        colorScheme: 'main',
    },
};
//# sourceMappingURL=checkbox.js.map