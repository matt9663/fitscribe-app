import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
  render() {
    return (
      <section className="login-page">
        <h2>Account Login</h2>
        <LoginForm/>
        <p>Don't have an account? <span className='register-link'><Link to='/register'>Click Here</Link></span> to register!</p>
      </section>
    )
  }
}