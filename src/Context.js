import React, { createContext, useState } from 'react'
import { getCurrentUser } from './services/login'

export const Context = createContext()

const Provider = ({ children }) => {
  const userState = () => {
    getCurrentUser()
      .then((user) => {
        console.log('UPDATE USER', user)
        setIsAuth(!!user)
        setUserInfo(user)
      })
  }

  const [userInfo, setUserInfo] = useState(null)
  const [isAuth, setIsAuth] = useState(() => {
    userState()
  })

  const value = {
    isAuth,
    userInfo,
    updateAuth: () => {
      console.log('ENTRA A UPDATE AUTH')
      userState()
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
