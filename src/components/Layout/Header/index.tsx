"use client";

import { BedIcon, LogoIcon, PlaneIcon } from "@/assets/icons";
import { ButtonGroup, Container, NavButton } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ButtonGroup>
        <NavButton href="/flights">
          <>
            <PlaneIcon />
            Find Flight
          </>
        </NavButton>
        <NavButton href="/hotels">
          <>
            <BedIcon />
            Find Flight
          </>
        </NavButton>
      </ButtonGroup>
      <LogoIcon />
      <ButtonGroup>
        <NavButton href="/flights">Login</NavButton>
        <NavButton href="/hotels">Sign up</NavButton>
      </ButtonGroup>
    </Container>
  );
};

export default Header;
