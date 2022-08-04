import "../styles/globals.css";
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
import getConfig from "next/config";
function MyApp({ Component, pageProps }: AppProps) {
  console.log(getConfig());
  return (
    <ThemeProvider theme={themes.public}>
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
        <Container>
          <Component {...pageProps} />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default MyApp;
