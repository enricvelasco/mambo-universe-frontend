import React from 'react'
import { Redirect, Router } from '@reach/router'
import OptionsMenu from './compoents/options-menu'
import { Container } from './style'
import Profile from './scenes/profile'
import MyRecipes from './scenes/my-recipes'
import Favs from './scenes/favs'
import Categories from './scenes/categories'

const UserContainer = () => {
  return (
    <Container>
      <OptionsMenu />
      <Router>
        <Profile default path='/profile/user_info' />
        <MyRecipes path='/profile/my_recipes' />
        <Favs path='/profile/favs' />
        <Categories path='/profile/categories' />
      </Router>
    </Container>
  )
}

export default UserContainer
