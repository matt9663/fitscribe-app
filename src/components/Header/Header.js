import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import TokenService from '../../services/token-service'
import UserContext from '../../context/UserContext'

export default class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.logOut()
  }

  renderLoggedInHeader() {
    return (
      <div className='nav-functions logged-in'>
        <Link to='/workouts'>
            Workouts
        </Link>
        {' '}
        <Link to="/exercises">
            Exercises
        </Link>
        {' '}
        <Link to="/plan">
          Plan
        </Link>
        <Link onClick={this.handleLogoutClick} to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderUnloggedHeader() {
    return (
      <div className='nav-functions unlogged'>
        <Link to='/demo'>
          About
        </Link>
        {' '}
        <Link to='/login'>
          Login
        </Link> 
        {' '}
        <Link to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            FitScribe
          </Link>
        </h1>
        {this.context.loggedInStatus
          ? this.renderLoggedInHeader()
          : this.renderUnloggedHeader()}
      </nav>
    )
  }
}