import Link from "next/link";
import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  gap: 32px;
`;

export const NavButton = styled(Link)`
  display: flex;
  gap: 5px;
  min-width: 70px;
  align-items: center;
  font-family: "Montserrat";
  font-weight: 600;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 60px 0px;
  position: relative;
  z-index: 5;
`;
