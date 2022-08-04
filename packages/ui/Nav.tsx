import * as React from "react";
import { AppBar as MuiAppBar, Box, Button, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
  const basePath = useRouter().basePath;

  return (
    <MuiAppBar component="nav" position="sticky" sx={{ p: 2 }}>
      <Box>
        {PATHS.map((path) => {
          const buttonEl = <Button variant="contained">{path.title}</Button>;

          return path.basePath === basePath ? (
            <Link href={path.href} key={path.href} passHref>
              {buttonEl}
            </Link>
          ) : (
            <a href={path.href} key={path.href}>
              {buttonEl}
            </a>
          );
        })}
      </Box>
    </MuiAppBar>
  );
};

const PATHS: {
  href: string;
  title: string;
  basePath: "" | "/app" | "/admin";
}[] = [
  { href: "/", title: "Home", basePath: "" },
  { href: "/about/", title: "About", basePath: "" },
  { href: "/app/", title: "Client App", basePath: "/app" },
  { href: "/admin/", title: "Admin App", basePath: "/admin" },
];
