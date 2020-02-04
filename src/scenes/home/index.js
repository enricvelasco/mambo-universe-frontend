import React from 'react'
import HomeTitle from './components/title'
import { Column, Row } from '../../application/grid-layout'

const Home = () => {
  return (
    <div>
      <HomeTitle />
      <Row>
        <Column large={1} medium={3} small={2}>HOLA 1</Column>
        <Column large={4} medium={3} small={2}>HOLA 2</Column>
        <Column large={4} medium={3} small={2}>HOLA 3</Column>
        <Column large={4} medium={3} small={2}>HOLA 4</Column>
        <Column large={4} medium={3} small={2}>HOLA 5</Column>
        <Column large={4} medium={3} small={2}>HOLA 6</Column>
        <Column large={4} medium={3} small={2}>HOLA 7</Column>
      </Row>
    </div>
  )
}

export default Home
