import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <NavLink exact to={'/'}>Home</NavLink>
      </nav>
    )
  }
}

export default Nav