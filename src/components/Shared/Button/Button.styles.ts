import {
  largeButton,
  mediumButton,
  primaryButton,
  secondaryButton,
  smallButton,
  tertiaryButton,
} from "@/global/defaultStyles";

import type { IStyledButtonProps } from "@/types";
import styled from "styled-components";

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;
  ${(props) =>
    props.primary
      ? primaryButton
      : props.secondary
      ? secondaryButton
      : tertiaryButton}
  ${(props) =>
    props.small ? smallButton : props.medium ? mediumButton : largeButton}
`;

export const ButtonText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #112211;
`;
