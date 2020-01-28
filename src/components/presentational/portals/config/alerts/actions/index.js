import React from 'react'
import ReactDOM from 'react-dom'
import { alertsPositionIds } from '../alert-position-group/alert-position-list'
import AlertsContainer from '../alertsContainer'
import Alerts from '../alerts/alerts'

const randomId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

const getAlertContainer = (id) => document.getElementById(id)

const createAlert = (id, container) => {
  const generatedId = id + '-' + randomId()
  const html = <Alerts id={id} generatedId={generatedId} />
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

const createContainer = (id, positionId) => {
  const container = getAlertContainer(positionId).getElementsByTagName('ul')[0]
  createAlert(id, container)
}

export const createBottomCenterAlert = (id) => {
  !getAlertContainer(alertsPositionIds.BOTTOM_CENTER) && createContainerAlert(alertsPositionIds.BOTTOM_CENTER)
  createContainer(id, alertsPositionIds.BOTTOM_CENTER)
}

export const createBottomLeftAlert = (id) => {
  !getAlertContainer(alertsPositionIds.BOTTOM_LEFT) && createContainerAlert(alertsPositionIds.BOTTOM_LEFT)
  createContainer(id, alertsPositionIds.BOTTOM_LEFT)
}

export const createBottomRightAlert = (id) => {
  !getAlertContainer(alertsPositionIds.BOTTOM_RIGHT) && createContainerAlert(alertsPositionIds.BOTTOM_RIGHT)
  createContainer(id, alertsPositionIds.BOTTOM_RIGHT)
}

export const createCenterCenterAlert = (id) => {
  !getAlertContainer(alertsPositionIds.CENTER_CENTER) && createContainerAlert(alertsPositionIds.CENTER_CENTER)
  createContainer(id, alertsPositionIds.CENTER_CENTER)
}

export const createCenterLeftAlert = (id) => {
  !getAlertContainer(alertsPositionIds.CENTER_LEFT) && createContainerAlert(alertsPositionIds.CENTER_LEFT)
  createContainer(id, alertsPositionIds.CENTER_LEFT)
}

export const createCenterRightAlert = (id) => {
  !getAlertContainer(alertsPositionIds.CENTER_RIGHT) && createContainerAlert(alertsPositionIds.CENTER_RIGHT)
  createContainer(id, alertsPositionIds.CENTER_RIGHT)
}

export const createTopCenterAlert = (id) => {
  !getAlertContainer(alertsPositionIds.TOP_CENTER) && createContainerAlert(alertsPositionIds.TOP_CENTER)
  createContainer(id, alertsPositionIds.TOP_CENTER)
}

export const createTopLeftAlert = (id) => {
  !getAlertContainer(alertsPositionIds.TOP_LEFT) && createContainerAlert(alertsPositionIds.TOP_LEFT)
  createContainer(id, alertsPositionIds.TOP_LEFT)
}

export const createTopRightAlert = (id) => {
  !getAlertContainer(alertsPositionIds.TOP_RIGHT) && createContainerAlert(alertsPositionIds.TOP_RIGHT)
  createContainer(id, alertsPositionIds.TOP_RIGHT)
}

export const hideAlertById = (portalId) => {
  document.getElementById(portalId).remove()
}
