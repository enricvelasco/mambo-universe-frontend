import styled from 'styled-components'
import { colors } from '../../../../../styles/config/colors'
import { mediaQueries } from '../../../../../styles/config/media-queries'

export const ModalRow = styled.div`
   position: relative;
   background-color: ${colors.modalBackgroundColor};
   width: 340px;
   height: 626px;
   margin: 0;
   ${mediaQueries.desktop} {
    width: 800px;
    height: 436px;
   }
`
