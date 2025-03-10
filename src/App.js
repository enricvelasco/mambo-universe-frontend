import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyle } from '@Styles/themes/GlobalStyles'
import Home from '@Scenes/home'
import NotFound from '@Scenes/not-found'
import UserContainer from '@Scenes/user-container'
import Profile from '@Scenes/user-container/scenes/profile'
import MyRecipes from '@Scenes/user-container/scenes/my-recipes'
import Favs from '@Scenes/user-container/scenes/favs'
import Categories from '@Scenes/user-container/scenes/categories'
import Header from '@Components/presentational/header'
import Footer from '@Components/presentational/footer'
import Container from '@Components/common/container'
import { Context } from './Context'

const App = () => {
  const { isAuth, isLoadingHome } = useContext(Context)

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
              {!isAuth && <Redirect from='profile' to='/' />}
              {isAuth && <Redirect from='profile' to='/profile/user_info' />}
              {isAuth &&
                <UserContainer path='profile'>
                  <Profile default path='user_info' />
                  <MyRecipes path='my_recipes' />
                  <Favs path='favs' />
                  <Categories path='categories' />
                </UserContainer>}
            </Router>
          </Container>
      }
      <Footer />
    </Suspense>
  )
}

export default App
