import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/themes/GlobalStyles'
import Home from './scenes/home'
import Header from './components/header'
import Footer from './components/footer'

const App = () => (
  <Suspense fallback={<div />}>
    <GlobalStyle />
    <Header />
    <Home />
    <Footer />
  </Suspense>
)

export default App
