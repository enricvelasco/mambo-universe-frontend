import React from 'react'
import ReactDom from 'react-dom'
import { alertsPositionContainer } from '../alert-position-group/alert-position-list'

const RenderAlert = ({ portal: { id, props }, Component, children }) => (
  <Component id={id}>
    {children}
  </Component>
)

const AlertsContainer = ({ id, ...props }) => {
  return ReactDom.createPortal(
    <>
      <RenderAlert portal={{ id, props }} Component={alertsPositionContainer.alertPosition[id]} />
    </>,
    document.getElementById(id)
  )
}

export default AlertsContainer
