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
        <div className='login-wrapper'>
          <h2>Account Login</h2>
            <LoginForm onLoginSuccess={this.handleLoginSuccess} updateLoggedInStatus={this.props.updateLoggedInStatus}/>
            <div className='sign-up-wrapper'>
              <p>Don't have an account? <span className='register-link'><Link to='/register'>Sign up</Link></span></p>
            </div>
        </div>
      </section>
    )
  }
}