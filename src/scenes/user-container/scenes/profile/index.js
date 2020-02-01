import React, { useContext } from 'react'
import { signOut } from '../../../../services/login'
import { createTopRightAlert } from '../../../../application/portals/config/alerts/actions'
import { alertsIds } from '../../../../application/portals/config/portals-list'
import { Context } from '../../../../Context'
import Container from '../../../../components/common/container'

const Profile = () => {
  const { updateAuth } = useContext(Context)

  const onLogout = () => {
    signOut()
      .then(() => {
        createTopRightAlert(alertsIds.SUCCESS, { text: 'sign out OK' })
        updateAuth()
      })
      .catch((err) => {
        createTopRightAlert(alertsIds.ERROR, { text: err.code })
      })
  }
  return (
    <div>
      PROFILE
      <button onClick={onLogout}>DICONNECT</button>
    </div>
  )
}

export default Profile
