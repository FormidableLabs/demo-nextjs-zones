import { createStyles, CssBaseline as MuiCssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useGlobalStyles = makeStyles(() =>
  createStyles({
    "@global": {
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      "*": {
        boxSizing: "border-box",
      },
      "html, body, #root": {
        padding: 0,
        margin: 0,
      },
    },
  })
);

export const CssBaseLine = () => {
  useGlobalStyles();
  return <MuiCssBaseline />;
};
