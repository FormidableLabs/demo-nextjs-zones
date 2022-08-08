import * as React from "react";
import { Container as MuiContainer } from "@mui/material";

export const Container = (props: React.ComponentProps<typeof MuiContainer>) => {
  return <MuiContainer {...props} />;
};
