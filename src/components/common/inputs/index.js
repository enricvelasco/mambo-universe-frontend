import React from 'react';
import { InputContainerStyled, Title } from '@Components/common/inputs/style'

const InputContainer = ({ title, children }) => (
    <InputContainerStyled>
      <Title>{title}</Title>
      {children}
    </InputContainerStyled>
);

export default InputContainer;
