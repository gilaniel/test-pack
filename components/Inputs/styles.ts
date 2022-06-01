export const CheckStyles = {
  'input[type="checkbox"]': {
    height: 0,
    width: 0,
    display: "none",
    border: "none",
  },
  'input[type="checkbox"] + label': {
    display: "flex",
    alignItems: "center",
    mb: 0,
  },
  'input[type="checkbox"] + label > span': {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mr: 2,
    width: "18px",
    height: "18px",
    background: "transparent",
    border: "2px solid",
    borderColor: "black.100",
    borderRadius: "3px",
    cursor: "pointer",
    pos: "relative",
    transition: "background 250ms cubic-bezier(.4,.0,.23,1)",
  },
  'input[type="checkbox"]:checked + label > span': {
    background: "main.500",
    borderColor: "main.500",
    // animation: `${shrinkBounce} 200ms cubic-bezier(.4,.0,.23,1)`,
  },
  'input[type="checkbox"] + label > span:before': {
    content: '""',
    position: "absolute",
    top: "-4px",
    left: "1px",
    width: "6px",
    height: "11px",
    borderColor: "white",
    borderRight: "2px solid transparent",
    borderBottom: "2px solid transparent",
    transform: "rotate(45deg)",
    transformOrigin: "0% 100%",
  },
  'input[type="checkbox"]:checked + label > span:before': {
    borderColor: "white",
  },
};

export const RadioStyles = {
  'input[type="radio"]': {
    height: 0,
    width: 0,
    display: "none",
    border: "none",
  },

  'input[type="radio"] + label': {
    display: "flex",
    alignItems: "center",
    mb: 0,
  },
  'input[type="radio"] + label > span': {
    mr: 2,
    width: "20px",
    height: "20px",
    background: "transparent",
    border: "2px solid",
    borderColor: "black.100",
    borderRadius: "50%",
    cursor: "pointer",
    pos: "relative",
    transition: "border-color .25s cubic-bezier(.4,.0,.23,1)",
  },

  'input[type="radio"]:checked + label > span:before': {
    borderColor: "main.500",
  },
};
