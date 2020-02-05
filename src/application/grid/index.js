import React, { useState, useEffect } from 'react'
import { Desktop, Mobile } from '../../components/presentational/responsive'
import { Container, Row, Column } from './style'

export const Grid = ({ colNumberDesktop, colNumberMobile, results }) => {
  const arrayDesktop = new Array(colNumberDesktop).fill(null)
  const arrayMobile = new Array(colNumberMobile).fill(null)

  return (
    <Container>
      {results.map((item, key) => (
        <Row key={item.id}>
          {Object.keys(item).map((value, index) => (
            <Column
              key={index}
              desktopNum={Object.keys(item).length}
              mobileNum={colNumberMobile}
            >
              {item[value]}
            </Column>
          ))}
        </Row>
      ))}
    </Container>
  )
}

/* export const Grid = ({ colNumberDesktop, colNumberMobile, results }) => {
  const arrayDesktop = new Array(colNumberDesktop).fill(null)
  const arrayMobile = new Array(colNumberMobile).fill(null)
  return (
    <Container>
      {results.map((item, key) => (
        <Row>
          <Desktop>
            {arrayDesktop.map((val, index) => {
              return (<Column key={index} desktopNum={colNumberDesktop} mobileNum={colNumberMobile}>{item.name}</Column>)
            })}
          </Desktop>
          <Mobile>
            {arrayMobile.map((val, index) => {
              return (<Column key={index} desktopNum={colNumberDesktop} mobileNum={colNumberMobile}>{item.name}</Column>)
            })}
          </Mobile>
        </Row>
      ))}
    </Container>
  )
} */
