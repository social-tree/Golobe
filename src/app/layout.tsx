import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"

import { GlobalStyles } from "@/global/globalStyles";
import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}




export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <GlobalStyles />
      <body>{children}</body>
    </html>
  );
}
