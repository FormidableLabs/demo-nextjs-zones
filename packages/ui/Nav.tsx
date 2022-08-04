import * as React from "react";
import { AppBar as MuiAppBar, Box, Button, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export type NavProps = {
  renderLink: (linkProps: {
    url: string;
    children: React.ReactNode;
  }) => React.ReactNode;
};

export const Nav = ({ renderLink }: NavProps) => {
  return (
    <MuiAppBar component="nav" position="sticky" sx={{ p: 2 }}>
      <Box>
        {PATHS.map(({ href, title }) => {
          return renderLink({
            url: href,
            children: <Button variant="contained">{title}</Button>,
          });
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
  { href: "/about", title: "About", basePath: "" },
  { href: "/app/", title: "Client App", basePath: "/app" },
  { href: "/admin", title: "Admin App", basePath: "/admin" },
];
