import React, { Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyle } from './styles/themes/GlobalStyles'
import Home from './scenes/home'
import Header from './components/presentational/header'
import Footer from './components/presentational/footer'
import Login from './components/presentational/login'
import NotFound from './scenes/not-found'

const App = () => (
  <Suspense fallback={<div />}>
    <GlobalStyle />
    <Header />
    <Router>
      <NotFound default />
      <Home path='/' />
      <Login path='/login' />
    </Router>
    <Footer />
  </Suspense>
)

export default App
