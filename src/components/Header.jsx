import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/login">Login page</Link>
        </li>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/product/charcho-me">charhco page</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
