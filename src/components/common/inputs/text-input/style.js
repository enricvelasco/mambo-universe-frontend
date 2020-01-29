import styled, { css } from 'styled-components'
import { fonts } from '../../../../styles/config/fonts'
import { colors } from '../../../../styles/config/colors'

const requiredBorder = css`
  border: 2px solid red;
`

export const InputContainer = styled.div`
  margin-bottom: 15px;
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  font-size: 16px;
  font-family: ${fonts.secondaryFont};
  color: ${colors.inputTextColor};
  padding: 5px 10px;
  background-color: ${colors.inputBackgroundColorDefault};
  border: 1px solid ${colors.inputBorderColorDefault};
  ${({ required }) => required && requiredBorder};
  ${({ isError }) => isError && requiredBorder};
  &:focus {
    outline: none;
    background-color: ${colors.inputBackgroundColorFocus};
  }
`

export const Title = styled.div`
  font-size: 16px;
  color: ${colors.inputTextColor};
  font-size: ${fonts.primaryFont};
`
