import React from 'react';
import { ContainerStyled } from './style'

const Container = ({ children }) => (
  <ContainerStyled>
    {children}
  </ContainerStyled>
);

export default Container;
