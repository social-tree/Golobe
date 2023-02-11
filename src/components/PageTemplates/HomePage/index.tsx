"use client"

import React, { Fragment, ReactNode } from 'react'
import { StyledHomePage, TopSection } from './HomePage.styles'

export interface IProps {
  children: ReactNode;
}

function HomePage({ children }: IProps) {
  return (
      <StyledHomePage>
        <TopSection>
          {children}
        </TopSection>
      </StyledHomePage>      
  )
}

export default HomePage