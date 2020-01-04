import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { NavLink } from "react-router-dom"
import HeaderStyle from "./HeaderStyle"

// import "./Header.css";
const Header = props => {
  const { classes } = props
  return (
    <header>
      <div className="headerWrap">
        <div className="title">Rick and Morty Characters</div>
        <nav>
          <ul className={classes.navList}>
            <li className="nav-list-item">
              <NavLink activeClassName="is-active" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink activeClassName="is-active" to="/characters/">
                Characters
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default withStyles(HeaderStyle)(Header)
