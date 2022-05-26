declare const _default: {
    sizes: {
        md: {
            minH: string;
        };
    };
    variants: {
        outline: {
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
    };
    defaultProps: {
        size: string;
        variant: string;
    };
};
export default _default;
