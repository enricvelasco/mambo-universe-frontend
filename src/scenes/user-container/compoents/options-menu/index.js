import React from 'react'
import { FaUserEdit } from 'react-icons/fa'
import { MdFavorite, MdMenu } from 'react-icons/md'
import { GiCookingPot } from 'react-icons/gi'
import { Link } from '@reach/router'
import { MenuContainer, Item } from './style'

const OptionsMenu = () => {
  return (
    <MenuContainer>
      <Item><Link to='/profile/user_info'><FaUserEdit size='30px' /></Link></Item>
      <Item><Link to='/profile/favs'><MdFavorite size='30px' /></Link></Item>
      <Item><Link to='/profile/my_recipes'><GiCookingPot size='30px' /></Link></Item>
      <Item><Link to='/profile/categories'><MdMenu size='30px' /></Link></Item>
    </MenuContainer>
  )
}

export default OptionsMenu
