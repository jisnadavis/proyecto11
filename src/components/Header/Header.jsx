import { NavLink } from 'react-router-dom'
import './Header.css'
import React from 'react'

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/' activeclassname='active'>
                GuessCountry
              </NavLink>
            </li>
            <li>
              <NavLink to='/GuessPopulation' activeclassname='active'>
                {' '}
                Guesspopulation
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
