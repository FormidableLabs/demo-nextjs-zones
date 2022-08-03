import { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";
export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "rgb(220, 0, 78)",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
};

export const theme = createTheme(themeOptions);
