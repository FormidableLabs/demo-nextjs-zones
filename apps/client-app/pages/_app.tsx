import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themes, ThemeProvider, CssBaseLine, Paper, Nav } from "@mfezones/ui";
import Link from "next/link";
import getConfig from "next/config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.client}>
      <CssBaseLine />
      <Paper elevation={0}>
        <Nav
          renderLink={({ children, url }) => (
            <Link
              passHref
              href={`${getConfig().publicRuntimeConfig.basePaths.public}${url}`}
            >
              {children}
            </Link>
          )}
        />
        <Component {...pageProps} />
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
