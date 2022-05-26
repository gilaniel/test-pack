import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
declare const _default: {
    variants: {
        solid: SystemStyleFunction;
        ghost: SystemStyleFunction;
    };
    baseStyle: {
        borderRadius: string;
        _disabled: {
            color: string;
            bg: string;
            borderColor: string;
        };
        ".chakra-button__icon": {
            ":first-of-type:not(:last-of-type)": {
                marginStart: number;
            };
            ":last-of-type:not(:first-of-type)": {
                marginEnd: number;
            };
        };
    };
    sizes: {
        md: {
            fontSize: string;
            px: number;
            py: number;
            lineHeight: number;
        };
        sm: {
            fontSize: string;
            px: number;
            py: number;
            lineHeight: number;
        };
        xs: {
            fontSize: string;
            px: number;
            py: number;
            lineHeight: number;
        };
    };
    defaultProps: {
        colorScheme: string;
    };
};
export default _default;
