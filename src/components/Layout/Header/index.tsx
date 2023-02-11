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
    <StyledHeader>
      <StyledNav>
        <Container>
          <NavButton className={isHomeClassName} href="/flights">
            <PlaneIcon />
            Find Flight
          </NavButton>
          <NavButton className={isHomeClassName} href="/hotels">
            <BedIcon />
            Find Flight
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
