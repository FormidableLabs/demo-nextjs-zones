import * as React from "react";
import { AppBar as MuiAppBar, Box, Button, MenuItem } from "@mui/material";

type BasePath = "" | "/app" | "/admin";
export type NavProps = {
  renderLink: (linkProps: {
    url: string;
    children: React.ReactNode;
    basePath: BasePath;
  }) => React.ReactNode;
};

export const Nav = ({ renderLink }: NavProps) => {
  return (
    <MuiAppBar component="nav" position="sticky" sx={{ p: 2 }}>
      <Box>
        {PATHS.map(({ href, title, basePath }) => {
          return renderLink({
            url: href,
            children: <Button variant="contained">{title}</Button>,
            basePath,
          });
        })}
      </Box>
    </MuiAppBar>
  );
};

const PATHS: {
  href: string;
  title: string;
  basePath: BasePath;
}[] = [
  { href: "/", title: "Home", basePath: "" },
  { href: "/about/", title: "About", basePath: "" },
  { href: "/app/", title: "Client App", basePath: "/app" },
  { href: "/admin/", title: "Admin App", basePath: "/admin" },
];
