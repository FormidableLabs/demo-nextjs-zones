import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themes, ThemeProvider, CssBaseLine, Paper, Nav } from "@mfezones/ui";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.admin}>
      <CssBaseLine />
      <Paper elevation={0}>
        <Nav
          renderLink={({ children, url, basePath }) =>
            basePath === "/admin" ? (
              <Link passHref href={url}>
                {children}
              </Link>
            ) : (
              <a href={url}>{children}</a>
            )
          }
        />
        <Component {...pageProps} />
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
