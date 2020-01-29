import React from 'react'
import ReactDOM from 'react-dom'
import Portals from '..'

export const createPortal = (portalId) => {
  const html = <Portals id={portalId} />
  const modal = document.createElement('div')
  modal.setAttribute('id', portalId)
  document.body.appendChild(modal)
  ReactDOM.render(html, document.getElementById(portalId))
}

export const hidePortalById = (portalId) => {
  document.getElementById(portalId).remove()
}
