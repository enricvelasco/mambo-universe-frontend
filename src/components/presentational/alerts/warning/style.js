import styled from 'styled-components'
import { colors } from '../../../../styles/config/colors'

export const AlertContainer = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${colors.warningColor};
  color: black;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  z-index: 100;
`
