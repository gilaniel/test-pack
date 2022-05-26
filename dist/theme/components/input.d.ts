declare const _default: {
    baseStyle: {
        addon: {
            userSelect: string;
        };
    };
    sizes: {
        md: {
            field: {
                h: number;
                px: number;
                py: number;
                borderRadius: string;
                fontSize: string;
                zIndex: number;
                background: string;
            };
            addon: {
                h: number;
                px: number;
                py: number;
                borderRadius: string;
                background: string;
            };
        };
    };
    variants: {
        filter: {
            field: {
                color: string;
                _hover: {
                    color: string;
                };
                _focus: {
                    color: string;
                };
                _disabled: {
                    color: string;
                };
            };
        };
        outline: {
            field: {
                border: string;
                borderColor: string;
                color: string;
                _placeholder: {
                    color: string;
                };
                _hover: {
                    borderColor: string;
                };
                _focus: {
                    borderColor: string;
                    zIndex: number;
                    ring: number;
                };
                _disabled: {
                    borderColor: string;
                };
                _readOnly: {
                    bg: string;
                    color: string;
                    _hover: {
                        borderColor: string;
                    };
                    _focus: {
                        borderColor: string;
                    };
                };
            };
            addon: {
                border: string;
                borderColor: string;
                color: string;
            };
        };
    };
    defaultProps: {
        variant: string;
        colorScheme: string;
    };
};
export default _default;
