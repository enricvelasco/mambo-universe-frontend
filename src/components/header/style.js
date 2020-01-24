import styled from 'styled-components'
import { colors } from '../../styles/config/colors'

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const LogoContainer = styled.div`
  width: 100%;
  margin-top: 35px;
  margin-bottom: 35px;
`

export const Logo = styled.div`
  height: 80px;
`

export const ItemsContainer = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid ${colors.borderColor};
  border-bottom: 1px solid ${colors.borderColor};
  display: flex;
  align-items: center;
  font-size: 18px;
`

export const Menu = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  color: ${colors.darkText};
  text-transform: uppercase;
`

export const Item = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`

export const UserAccessContainer = styled.div`
  width: 70px;
  justify-content: right;
`
