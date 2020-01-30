import React from 'react'
import ReactDom from 'react-dom'
import { portals } from '../portals-list'
import { hidePortalById } from './actions'

const RenderPortal = ({ portal: { id, props }, Component }) => (
  <Component id={id} close={() => hidePortalById(id)} {...props} />
)

const Portals = ({ id, ...props }) => {
  return ReactDom.createPortal(
    <>
      <RenderPortal portal={{ id, props }} Component={portals.modal[id]} />
    </>,
    document.getElementById(id)
  )
}

export default Portals
