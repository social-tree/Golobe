"use client"

import { ButtonText, StyledButton } from "./Button.styles";

import type { IButtonProps } from "@/types";
import React from "react";

function Button({
  type,
  size,
  iconEnd,
  iconStart,
  children,
  click,
}: IButtonProps) {
  return (
    <StyledButton
      onClick={click}
      primary={type == "primary"}
      secondary={type == "secondary"}
      tertiary={type == "tertiary"}
      small={size == "small"}
      medium={size == "medium"}
      large={size == "large"}
    >
      {iconStart}
      <ButtonText>{children}</ButtonText>
      {iconEnd}
    </StyledButton>
  );
}

export default Button;
