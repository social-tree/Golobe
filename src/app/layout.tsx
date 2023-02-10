import { GlobalStyles } from "@/global/styles";
import { ReactNode } from "react";

export interface IChildrenProp {
  children: ReactNode;
}

export default function RootLayout({ children }: IChildrenProp) {
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
