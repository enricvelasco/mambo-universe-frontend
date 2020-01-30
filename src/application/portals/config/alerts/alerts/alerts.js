import React from 'react'
import ReactDom from 'react-dom'
import { alerts } from '../../portals-list'
import { hideAlertById } from '../actions'

const RenderAlert = ({ portal: { generatedId, props }, Component }) => (
  <Component id={generatedId} close={() => hideAlertById(generatedId)} {...props} />
)

const Alerts = ({ id, generatedId, ...props }) => {
  console.log('entra en alerts', id, generatedId, props)
  return ReactDom.createPortal(
    <>
      <RenderAlert portal={{ generatedId, props }} Component={alerts.alert[id]} />
    </>,
    document.getElementById(generatedId)
  )
}

export default Alerts
