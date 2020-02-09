import React from 'react'
import { FaUserEdit, FaRegNewspaper, FaPlus } from 'react-icons/fa'
import { MdFavorite, MdMenu, MdRestaurantMenu } from 'react-icons/md'
import { Link } from '@reach/router'
import { MenuContainer, Item } from './style'

const OptionsMenu = () => {
  return (
    <MenuContainer>
      <Item><Link to='/profile/user_info'><FaUserEdit size='30px' /></Link></Item>
      <Item><Link to='/profile/favs'><MdFavorite size='30px' /></Link></Item>
      <Item><Link to='/profile/my_recipes'><FaRegNewspaper size='30px' /></Link></Item>
      <Item><Link to='/profile/recipe_categories'><MdMenu size='30px' /></Link></Item>
      <Item><Link to='/profile/ingredients'><FaPlus size='30px' /></Link></Item>
      <Item><Link to='/profile/ingredients_categories'><MdRestaurantMenu size='30px' /></Link></Item>
    </MenuContainer>
  )
}

export default OptionsMenu
