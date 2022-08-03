import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themes, ThemeProvider, CssBaseLine, Paper, Nav } from "@mfezones/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.public}>
      <CssBaseLine />
      <Paper elevation={0}>
        <Nav />
        <Component {...pageProps} />
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
