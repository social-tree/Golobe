"use client";

import { BedIcon, DarkLogoIcon, LightLogoIcon, PlaneIcon } from "@/assets/icons";
import { ButtonGroup, Container, NavButton } from "./Header.styles";

import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()

  

  return (
    <Container>
      <ButtonGroup>
        <NavButton
          href="/flights"
          className={pathname == "flights" ? "active" : ""}
        >
          <>
            <PlaneIcon />
            Find Flight
          </>
        </NavButton>
        <NavButton
          href="/hotels"
          className={pathname == "flights" ? "active" : ""}
        >
          <>
            <BedIcon />
            Find Flight
          </>
        </NavButton>
      </ButtonGroup>
      {pathname == "/" ? <LightLogoIcon /> : <DarkLogoIcon />}
      <ButtonGroup>
        <NavButton href="/flights">Login</NavButton>
        <NavButton href="/hotels">Sign up</NavButton>
      </ButtonGroup>
    </Container>
  );
};

export default Header;
