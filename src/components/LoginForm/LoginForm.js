import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginForm extends Component {
  state = {
    userName: '',
    password: ''
  }
  render() {
    return (
      <form className="login-form">
        <div className="userName group">
          <label htmlFor='userName'>Username: </label>
          <input type="text" name="userName" placeholder="User Name" />
        </div>
        <div className="password group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" value="Login"/>
      </form>
    )
  }
}