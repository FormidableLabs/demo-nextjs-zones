import type { AppProps } from "next/app";
import {
  themes,
  ThemeProvider,
  CssBaseLine,
  Paper,
  Nav,
  Container,
} from "@mfezones/ui";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.public}>
      <CssBaseLine />
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Paper elevation={0}>
        <Nav
          renderLink={({ children, url, basePath }) =>
            basePath === "" ? (
              <Link passHref href={url}>
                {children}
              </Link>
            ) : (
              <a href={url}>{children}</a>
            )
          }
        />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
