import styled from 'styled-components'
import Close from '../close'
import { colors } from '../../../../../../styles/config/colors'

export const ModalContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalClose = styled(Close)`
  fill: ${colors.lightText};
  width: 25px;
  height: 25px;
  position: absolute;
  top: -33px;
  right: 6px;
  &:hover {
    cursor: pointer;
  }
`
