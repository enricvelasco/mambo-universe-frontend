import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { colors } from '../../styles/config/colors'

export const Link = styled(LinkRouter)`
  background-color: ${colors.backgroundDarkColor};
  border-radius: 20px;
  color: ${colors.lightText};
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
