declare const _default: {
    variants: {
        button: {
            tab: {
                bg: string;
                _notFirst: {
                    borderLeftWidth: string;
                    borderLeftColor: string;
                };
                _first: {
                    borderTopLeftRadius: string;
                    borderBottomLeftRadius: string;
                };
                _last: {
                    borderTopRightRadius: string;
                    borderBottomRightRadius: string;
                };
                _notLast: {
                    marginEnd: string;
                };
                _selected: {
                    borderLeftColor: string;
                    fontWeight: string;
                    bg: string;
                    color: string;
                };
                _focus: {
                    boxShadow: string;
                };
            };
            tablist: {
                display: string;
                boxShadow: string;
                borderRadius: string;
            };
            tabpanel: {
                p: number;
            };
        };
        'icon-button': {
            tab: {
                'svg > path': {
                    fill: string;
                };
                _selected: {
                    'svg > path': {
                        fill: string;
                    };
                    borderLeftColor: string;
                    fontWeight: string;
                    bg: string;
                    color: string;
                };
                bg: string;
                _notFirst: {
                    borderLeftWidth: string;
                    borderLeftColor: string;
                };
                _first: {
                    borderTopLeftRadius: string;
                    borderBottomLeftRadius: string;
                };
                _last: {
                    borderTopRightRadius: string;
                    borderBottomRightRadius: string;
                };
                _notLast: {
                    marginEnd: string;
                };
                _focus: {
                    boxShadow: string;
                };
            };
            tablist: {
                display: string;
                boxShadow: string;
                borderRadius: string;
            };
            tabpanel: {
                p: number;
            };
        };
        filter: {
            tab: {
                bg: string;
                borderWidth: string;
                borderColor: string;
                fontWeight: string;
                fontSize: string;
                color: string;
                _notFirst: {
                    borderLeftColor: string;
                };
                _first: {
                    borderTopLeftRadius: string;
                    borderBottomLeftRadius: string;
                };
                _last: {
                    borderTopRightRadius: string;
                    borderBottomRightRadius: string;
                };
                _notLast: {
                    marginEnd: string;
                };
                _selected: {
                    borderColor: string;
                    bg: string;
                    color: string;
                    '& + button': {
                        borderLeftColor: string;
                    };
                };
                _focus: {
                    boxShadow: string;
                };
            };
            tablist: {
                boxShadow: string;
                borderRadius: string;
            };
            tabpanel: {
                p: number;
            };
        };
        link: {
            tab: {
                p: number;
                _notLast: {
                    marginEnd: number;
                };
                _selected: {
                    color: string;
                    textDecoration: string;
                    fontWeight: string;
                };
                _focus: {
                    ring: number;
                };
            };
            tabpanel: {
                p: number;
            };
        };
        underscore: {
            tab: {
                p: number;
                color: string;
                _notLast: {
                    marginEnd: number;
                };
                _selected: {
                    color: string;
                    borderBottom: string;
                    fontWeight: string;
                    borderRadius: string;
                    pb: string;
                };
                _focus: {
                    ring: number;
                };
            };
            tabpanel: {
                p: number;
            };
        };
    };
    sizes: {
        md: {
            tab: {
                fontSize: string;
                px: number;
                py: number;
            };
        };
        lg: {
            tab: {
                px: number;
                py: number;
            };
        };
    };
};
export default _default;
