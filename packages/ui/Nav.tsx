import * as React from "react";

export const Nav = () => {
  return (
    <nav>
      <ul>
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
    </nav>
  );
};
