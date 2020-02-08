import styled, { css } from 'styled-components'
import { fonts } from '../../../../styles/config/fonts'
import { colors } from '../../../../styles/config/colors'

const requiredBorder = css`
  border: 2px solid ${colors.inputRequiredColor};
`

export const InputContainer = styled.div`
  margin-bottom: 15px;
`

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 2px;
  font-size: 16px;
  font-family: ${fonts.secondaryFont};
  color: ${colors.inputTextColor};
  padding: 5px 10px;
  background-color: ${colors.inputBackgroundColorDefault};
  border: 1px solid ${colors.inputBackgroundColorDefault};
  resize: none;
  ${({ required }) => required && requiredBorder};
  ${({ isError }) => isError && requiredBorder};
  &:focus {
    outline: none;
  }
`

export const Title = styled.div`
  font-size: 16px;
  color: ${colors.inputTextColor};
  font-size: ${fonts.primaryFont};
  margin-bottom: 5px;
`
