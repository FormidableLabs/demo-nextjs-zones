import * as React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

export const Nav = () => {
  return (
    <nav>
      <MuiAppBar>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/posts">Manage Posts</a>
          </li>
          <li>
            <a href="/users">Manage users</a>
          </li>
        </ul>
      </MuiAppBar>
    </nav>
  );
};
