import React from 'react'
import { Link } from './style'

const LinkButton = ({ link = "/", children }) => (
  <Link to={link}>
    {children}
  </Link>
);

export default LinkButton
