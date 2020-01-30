import React from 'react'
import ReactDOM from 'react-dom'
import { alertsPositionIds } from '../alert-position-group/alert-position-list'
import AlertsContainer from '../alertsContainer'
import Alerts from '../alerts/alerts'

const randomId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

const getAlertContainer = (id) => document.getElementById(id)

const createAlert = (id, container, props) => {
  const generatedId = id + '-' + randomId()
  const html = <Alerts id={id} generatedId={generatedId} {...props} />
  const alert = document.createElement('li')
  alert.setAttribute('id', generatedId)
  container.appendChild(alert)
  ReactDOM.render(html, document.getElementById(generatedId))
}

const createContainerAlert = (id) => {
  const html = <AlertsContainer id={id} />
  const alert = document.createElement('div')
  alert.setAttribute('id', id)
  document.body.appendChild(alert)
  ReactDOM.render(html, document.getElementById(id))
}

const createContainer = (id, positionId, props) => {
  const container = getAlertContainer(positionId).getElementsByTagName('ul')[0]
  createAlert(id, container, props)
}

export const createBottomCenterAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.BOTTOM_CENTER) && createContainerAlert(alertsPositionIds.BOTTOM_CENTER)
  createContainer(id, alertsPositionIds.BOTTOM_CENTER, props)
}

export const createBottomLeftAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.BOTTOM_LEFT) && createContainerAlert(alertsPositionIds.BOTTOM_LEFT)
  createContainer(id, alertsPositionIds.BOTTOM_LEFT, props)
}

export const createBottomRightAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.BOTTOM_RIGHT) && createContainerAlert(alertsPositionIds.BOTTOM_RIGHT)
  createContainer(id, alertsPositionIds.BOTTOM_RIGHT, props)
}

export const createCenterCenterAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.CENTER_CENTER) && createContainerAlert(alertsPositionIds.CENTER_CENTER)
  createContainer(id, alertsPositionIds.CENTER_CENTER, props)
}

export const createCenterLeftAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.CENTER_LEFT) && createContainerAlert(alertsPositionIds.CENTER_LEFT)
  createContainer(id, alertsPositionIds.CENTER_LEFT, props)
}

export const createCenterRightAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.CENTER_RIGHT) && createContainerAlert(alertsPositionIds.CENTER_RIGHT)
  createContainer(id, alertsPositionIds.CENTER_RIGHT, props)
}

export const createTopCenterAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.TOP_CENTER) && createContainerAlert(alertsPositionIds.TOP_CENTER)
  createContainer(id, alertsPositionIds.TOP_CENTER, props)
}

export const createTopLeftAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.TOP_LEFT) && createContainerAlert(alertsPositionIds.TOP_LEFT)
  createContainer(id, alertsPositionIds.TOP_LEFT, props)
}

export const createTopRightAlert = (id, props) => {
  !getAlertContainer(alertsPositionIds.TOP_RIGHT) && createContainerAlert(alertsPositionIds.TOP_RIGHT)
  createContainer(id, alertsPositionIds.TOP_RIGHT, props)
}

export const hideAlertById = (portalId) => {
  document.getElementById(portalId).remove()
}
