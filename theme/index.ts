import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import typography from "./foundations/typography";
import colors from "./foundations/colors";
import shadows from "./foundations/shadows";
import * as components from "./components";

import Sidebar from "../components/Sidebar/Sidebar.theme";
import Card from "../components/Card/Card.theme";
import IconButton from "../components/IconButton/IconButton.theme";
import NavMenu from "../components/NavMenu/NavMenu.theme";
import Pagination from "../components/Pagination/Pagination.theme";

const coreTheme = extendTheme({
  config: {
    cssVarPrefix: "dq",
    initialColorMode: "light",
  },
  styles,
  shadows,
  colors,
  ...typography,
  components: {
    ...components,
    Sidebar,
    Card,
    NavMenu,
    IconButton,
    Pagination,
  },
});

export const theme = coreTheme;
