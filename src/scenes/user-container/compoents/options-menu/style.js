import styled from 'styled-components'
import { colors } from '../../../../styles/config/colors'

export const MenuContainer = styled.ul`
  padding: 10px;
  width: 75px;
  border-right: 2px solid ${colors.borderColor};
`

export const Item = styled.li`
  color: ${colors.darkText};
  text-decoration: none;
  margin-bottom: 10px;
  a {
    color: ${colors.darkText};
  }
  &:hover {
    opacity: 0.8;
  }
`
