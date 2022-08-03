import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant: MuiButtonProps["variant"];
  onClick?: MuiButtonProps["onClick"];
  children: ReactNode;
};

export const Button = ({ href, children, variant, onClick }: ButtonProps) => {
  return (
    <MuiButton href={href} variant={variant} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
