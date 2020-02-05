import styled from 'styled-components'
import { colors } from '@Styles/config/colors'
import { fonts } from '@Styles/config/fonts'

export const ButtonStyled = styled.button`
  background-color: ${colors.backgroundDarkColor};
  border-radius: 20px;
  color: ${colors.lightText};
  padding: 12px 20px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-family: ${fonts.primaryFont};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
