import * as React from "react";
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

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
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Formidapets
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Stack direction="row" spacing={2}>
            {PATHS.map(({ href, title, basePath }) => {
              return renderLink({
                url: href,
                children: (
                  <Button variant="contained" disableElevation>
                    {title}
                  </Button>
                ),
                basePath,
              });
            })}
          </Stack>
        </Box>
      </Toolbar>
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
