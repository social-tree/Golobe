"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
font-style: normal;
}

a {
  color: inherit;
  text-decoration: none;
}

`;
