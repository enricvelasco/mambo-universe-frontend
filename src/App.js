import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyle } from './styles/themes/GlobalStyles'
import Home from './scenes/home'
import Header from './components/presentational/header'
import Footer from './components/presentational/footer'
import Login from './components/presentational/login'
import NotFound from './scenes/not-found'
import { Context } from './Context'
import UserContainer from './scenes/user-container'
import Profile from './scenes/user-container/scenes/profile'
import MyRecipes from './scenes/user-container/scenes/my-recipes'
import Favs from './scenes/user-container/scenes/favs'
import Categories from './scenes/user-container/scenes/categories'
import Container from './components/common/container'

const App = () => {
  const { isAuth, updateAuth, isLoadingHome } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Header />
      {
        isLoadingHome
          ? <div>Loading...</div>
          : <Container>
            <Router>
              <NotFound default />
              <Home path='/' />
              {!isAuth && <Login path='/login' onLogin={() => updateAuth()} />}
              {!isAuth && <Redirect from='/profile' to='/' />}
              {isAuth && <Redirect from='/profile' to='/profile/user_info' />}
              {isAuth && <UserContainer path='/profile'>
                <Profile default path='/user_info' />
                <MyRecipes path='/my_recipes' />
                <Favs path='/favs' />
                <Categories path='/categories' />
              </UserContainer>}
            </Router>
          </Container>
      }
      <Footer />
    </Suspense>
  )
}

export default App
