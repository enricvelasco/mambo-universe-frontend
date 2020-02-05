import React from 'react'
import { Redirect, Router } from '@reach/router'
import FormularyList from '@Components/presentational/formylary-list'
import Formulary from '@Scenes/user-container/scenes/my-recipes/formulary'

const MyRecipes = ({ children }) => {
  return (
    <div>
      MY RECIPES
      {children}
    </div>
  )
}

export default MyRecipes
