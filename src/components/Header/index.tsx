"use client";

import { ButtonGroup, Container, NavButton } from "./Header.styles";

import Bed from "@/assets/icons/bed.svg";
import Logo from "@/assets/icons/logo.svg";
import Plane from "@/assets/icons/plane.svg";

const Header = () => {
  return (
    <Container>
      <ButtonGroup>
        <NavButton href="/flights">
          <>
            <Plane />
            Find Flight
          </>
        </NavButton>
        <NavButton href="/hotels">
          <>
            <Bed />
            Find Flight
          </>
        </NavButton>
      </ButtonGroup>
      <Logo />
      <ButtonGroup>
        <NavButton href="/flights">Login</NavButton>
        <NavButton href="/hotels">Sign up</NavButton>
      </ButtonGroup>
    </Container>
  );
};


export default Header;