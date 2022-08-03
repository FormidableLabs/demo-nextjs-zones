import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themes, ThemeProvider, CssBaseLine, Paper } from "@mfezones/ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.client}>
      <CssBaseLine />
      <Paper elevation={0}>
        <Component {...pageProps} />
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
