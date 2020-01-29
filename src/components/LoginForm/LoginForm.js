import React, { Component } from 'react'
import './LoginForm.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../context/UserContext'

export default class LoginForm extends Component {
  static contextType = UserContext
  static defaultProps = {
    onLoginSuccess: () => {},
  }
  state = {
    error: null
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { userName, password } = ev.target
    AuthApiService.postLogin({
      user_name: userName.value,
      password: password.value
    })
    .then(res => {
      userName.value = ''
      password.value = ''
      TokenService.saveAuthToken(res.authToken)
      this.context.loginSuccess()
      this.props.onLoginSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  render() {
    const { error } = this.state
    return (
      <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
          {error && 
          <div className='form-error' role='alert'> 
            <i className="fas fa-exclamation-circle"></i>
            <p className='error-message'>{error}</p>
          </div>}
          <div className="userName group">
            <label htmlFor='userName'>Username: </label>
            <input type="text" name="userName" placeholder="User Name" />
          </div>
          <div className="password group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password"/>
          </div>
          <input type="submit" value="Sign In"/>
      </form>
    )
  }
}