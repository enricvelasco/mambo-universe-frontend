import React from 'react'
import { RecipesContainer } from '@Scenes/user-container/scenes/my-recipes/style'

const MyRecipes = ({ children }) => {
  return (
    <RecipesContainer>
      MY RECIPES
      {children}
    </RecipesContainer>
  )
}

export default MyRecipes
