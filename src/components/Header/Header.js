import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            FitScribe
          </Link>
        </h1>
        {' '}
        <Link to='/login'>
          Login
        </Link>
        {' '}
        <Link to='/demo'>
          About
        </Link>
        {' '}
        <Link to='/workouts'>
          Workouts
        </Link>
        {' '}
        <Link to="/exercises">
          Exercises
        </Link>
      </nav>
    )
  }
}