import { NavLink } from 'react-router-dom'
import './Header.css'
import React, { useState } from 'react'

export const Header = () => {
  const [open, setopen] = useState(false)
  const toogle = () => {
    return setopen(!open)
  }
  const closeMenu = () => {
    setopen(false)
  }
  return (
    <div>
      <img
        src='https://w7.pngwing.com/pngs/639/1013/png-transparent-hamburger-button-computer-icons-drop-down-list-fast-food-menu-rectangle-share-icon-pancake.png'
        className='menudesplagble'
        onClick={toogle}
      ></img>
      <header className={open ? 'menuvertical' : 'nodisplay'}>
        <nav>
          <ul>
            <li>
              <NavLink to='/' activeclassname='active' onClick={closeMenu}>
                GuessCountry
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/GuessPopulation'
                activeclassname='active'
                onClick={closeMenu}
              >
                {' '}
                Guesspopulation
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/guesscapital'
                activeclassname='active'
                onClick={closeMenu}
              >
                Guesscapital
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
