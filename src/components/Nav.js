import React from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/newquestion' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
          Hello, Tyler MCginnis
          Avatar
          </li>
          <li>
            <NavLink to='/logout' activeClassName='active'>
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
