import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    },
    updateLoggedInStatus: () => {}
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }
 
 render() {
    return (
      <section className="login-page">
        <h2>Account Login</h2>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} updateLoggedInStatus={this.props.updateLoggedInStatus}/>
        <p>Don't have an account? <span className='register-link'><Link to='/register'>Click Here</Link></span> to register!</p>
      </section>
    )
  }
}