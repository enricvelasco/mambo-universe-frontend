import React, { createContext, useState } from 'react'
import { getCurrentUser } from './services/login'

export const Context = createContext()

const Provider = ({ children }) => {
  const userState = () => {
    getCurrentUser()
      .then((user) => {
        setIsAuth(!!user)
        setUserInfo(user)
        setIsLoadingHome(false)
      })
  }

  const [isLoadingHome, setIsLoadingHome] = useState(true)
  const [userInfo, setUserInfo] = useState(null)
  const [isAuth, setIsAuth] = useState(() => {
    userState()
  })

  const value = {
    isAuth,
    isLoadingHome,
    userInfo,
    updateAuth: () => {
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
