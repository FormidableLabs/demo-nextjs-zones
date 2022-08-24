import type { AppProps } from "next/app";
import {
  Container,
  CssBaseLine,
  Nav,
  Paper,
  ThemeProvider,
  themes,
} from "@mfezones/ui";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.public}>
      <CssBaseLine />
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
