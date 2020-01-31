import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyle } from './styles/themes/GlobalStyles'
import Home from './scenes/home'
import Header from './components/presentational/header'
import Footer from './components/presentational/footer'
import Login from './components/presentational/login'
import NotFound from './scenes/not-found'
import Profile from './scenes/user-container/profile'
import { Context } from './Context'

const App = () => {
  const { isAuth, updateAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Header />
      <Router>
        <NotFound default />
        <Home path='/' />
        {!isAuth && <Login path='/login' onLogin={() => updateAuth()} />}
        {!isAuth && <Redirect from='/profile' to='/' />}
        <Profile path='/profile' />
      </Router>
      <Footer />
    </Suspense>
  )
}

export default App
