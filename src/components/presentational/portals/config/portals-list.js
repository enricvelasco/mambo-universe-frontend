import LoginModal from '../modals/login-modal'
import SuccessAlert from '../alerts/success'
import WarningAlert from '../alerts/warning'

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
