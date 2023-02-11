import Link from "next/link";
import { ParagraphS } from "@/global/defaultStyles";
import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100vw;
  height: 90px;
  margin: auto;
  padding: 21px 100px;
  display: flex;
  justify-content: center;
`;

export const StyledNav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const NavButton = styled(Link)`
  color: black;
  display: flex;
  gap: 4px;
  align-items: center;
  ${ParagraphS}
  font-weight: 600;

  path {
    fill: black;
  }

  &.home {
    color: white;

    path {
      fill: white;
    }
  }
`;

export const LoginNav = styled(Link)`
  ${ParagraphS}
  color: #112211;
  font-weight: 600;
  
  &.home {
    color: white;
  }
`;

export const SignUpNav = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 48px;
  background: #112211;
  border-radius: 8px;
  ${ParagraphS}
  color: white;
  font-weight: 600;

  &.home {
    background: #FFFFFF;
    color: #112211;
  }
`;
