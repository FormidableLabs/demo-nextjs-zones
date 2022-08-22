import React from "react";
import { Typography } from "@mfezones/ui";

const About = () => {
  return (
    <div>
      <Typography variant="h1">About</Typography>
      <Typography>
        This site is a showcase of using Next.js Zones. For more details on this
        exploration, check out{" "}
        <a
          href="https://github.com/FormidableLabs/showcase-nextjs-zones/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          the repo
        </a>
        .
      </Typography>
    </div>
  );
};

export default About;
