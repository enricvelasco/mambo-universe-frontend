import styled from 'styled-components'
import { colors } from '../../../../styles/config/colors'
import { fonts } from '../../../../styles/config/fonts'
import { mediaQueries } from '../../../../styles/config/media-queries'

export const ModalRow = styled.div`
   position: relative;
   background-color: ${colors.modalBackgroundColor};
   width: 340px;
   height: 400px;
   margin: 0;
   border-radius: 2px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   ${mediaQueries.desktop} {
    width: 450px;
    height: 436px;
   }
`

export const FormContainer = styled.form`
  width: 300px;
  margin-bottom: 20px;
`

export const Title = styled.h2`
  margin-bottom: 30px;
`

export const ButtonContainer = styled.div`
  margin-top: 30px;
  justify-content: center;
  display: flex;
`

export const Link = styled.p`
  font-family: ${fonts.primaryFont};
  font-size: 12px;
  color: ${colors.linkColor};
`
