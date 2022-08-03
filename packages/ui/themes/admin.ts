import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
};

export const theme = createTheme(themeOptions);
