import React, { Component } from 'react'
import './RegisterUserForm.css'
import AuthApiService from '../../services/auth-api-service'

export default class RegisterUserForm extends Component {
  static defaultProps = {
    handleRegistrationSucces: () => {}
  }

  state = { error: null }

  checkPasswordMatch(password, passwordCheck) {
    return password === passwordCheck
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { userName, email_address, password, check_password } = ev.target
    if (this.checkPasswordMatch(password.value, check_password.value)) {
      this.setState({ error: null })
      AuthApiService.postUser({
        user_name: userName.value,
        email_address: email_address.value,
        password: password.value
      })
        .then(user => {
          userName.value = ''
          email_address.value = ''
          password.value = ''
          check_password.value = ''
          this.props.handleRegistrationSucces()
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
    } else {
      this.setState({ error: 'Password does not match, please try again' })
    }

  }
  render() {
    const { error } = this.state
    return (
      <form className="register-user-form" onSubmit={this.handleSubmit}>
        {error && 
          <div className='form-error' role='alert'> 
            <i className="fas fa-exclamation-circle"></i>
            <p className='error-message'>{error}</p>
          </div>}
        <div className="userName group">
          <label htmlFor='userName'>Username: </label>
          <input type="text" name="userName" placeholder="User Name"/>
        </div>
        <div className="emailAddress group">
          <label htmlFor='emailAddress'>Email </label>
          <input type="text" name="email_address" placeholder="Email"/>
        </div>
        <div className="password group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="password group">
          <label htmlFor="re-enter-password">Password: </label>
          <input type="password" name="check_password" placeholder="Re-enter Password" />
        </div>
        <input type="submit" value="Create New Account"/>
      </form>
    )
  }
}