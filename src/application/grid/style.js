import styled from 'styled-components'
import { mediaQueries } from '../../styles/config/media-queries'

const desktopSize = '800px';
const mobileSize = '400px';

export const Container = styled.div`
  width: 100%;
  max-width: ${desktopSize};
  position: relative;
  overflow: auto;
`

export const Row = styled.div`
  background: aquamarine;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: ${mobileSize};
  ${mediaQueries.desktop} {
    width: ${desktopSize};
  }
`

export const Column = styled.div`
  border: 1px solid blue;
  background: grey;
  width: calc(${mobileSize} / ${({ mobileNum }) => mobileNum});
  ${mediaQueries.desktop} {
    width: calc(${desktopSize} / ${({ desktopNum }) => desktopNum});
  }
`
