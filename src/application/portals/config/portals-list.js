import LoginModal from '../../../components/presentational/modals/login-modal'
import SuccessAlert from '../../../components/presentational/alerts/success'
import WarningAlert from '../../../components/presentational/alerts/warning'

export const portalsIds = {
  LOGIN: 'login-modal'
}

export const alertsIds = {
  SUCCESS: 'success-alert',
  WARNING: 'warning-alert'
}

export const portals = {
  modal: {
    [portalsIds.LOGIN]: LoginModal
  }
}

export const alerts = {
  alert: {
    [alertsIds.SUCCESS]: SuccessAlert,
    [alertsIds.WARNING]: WarningAlert
  }
}
