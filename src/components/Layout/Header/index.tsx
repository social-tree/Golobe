"use client";

import {
  BedIcon,
  DarkLogoIcon,
  LightLogoIcon,
  PlaneIcon,
} from "@/assets/icons";
import { Container, LoginNav, NavButton, SignUpNav, StyledHeader, StyledNav } from "./Header.styles";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();


  const isHomeClassName = pathname == "/" ? "home" : ''

  return (
    <StyledHeader className={!isHomeClassName ? "not-home" : ''}>
      <StyledNav>
        <Container className={isHomeClassName}>
          <NavButton className={pathname == "/flights" ? "active" : ''} href="/flights">
            <PlaneIcon />
            Find Flights
          </NavButton>
          <NavButton className={pathname == "/hotels" ? "active" : ''} href="/hotels">
            <BedIcon />
            Find Stays
          </NavButton>
        </Container>

        {pathname == "/" ? <LightLogoIcon /> : <DarkLogoIcon />}

        <Container>
          <LoginNav className={isHomeClassName}  href="/login">Login</LoginNav>
          <SignUpNav className={isHomeClassName} href="/sign-up">Sign Up</SignUpNav>
        </Container>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
