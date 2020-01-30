import styled from 'styled-components'
import { colors } from '../../../../styles/config/colors'

export const AlertContainer = styled.div`
  width: 200px;
  height: 100px;
  background-color: ${colors.successColor};
  color: white;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 10px;
  z-index: 100;
`
