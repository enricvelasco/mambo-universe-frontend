import React from 'react'
import { Link } from './style'

const LinkButton = ({ link = '/', children, onClick }) => (
  <Link to={link} onClick={onClick}>
    {children}
  </Link>
)

export default LinkButton
