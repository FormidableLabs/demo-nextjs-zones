import "../styles/globals.css";
import type { AppProps } from "next/app";
import { themes, ThemeProvider, CssBaseLine, Paper, Nav } from "@mfezones/ui";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.admin}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
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
