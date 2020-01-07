import React, { Component } from 'react'
import './RegisterUserForm.css'

export default class RegisterUserForm extends Component {
  state = {
    userName: '',
    password: '',
    emailAddress: ''
  }
  render() {
    return (
      <form className="register-user-form">
        <div className="userName group">
          <label htmlFor='userName'>Username: </label>
          <input type="text" name="userName" placeholder="User Name" />
        </div>
        <div className="emailAddress group">
          <label htmlFor='emailAddress'>Email </label>
          <input type="text" name="userName" placeholder="Email" />
        </div>
        <div className="password group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <div className="password group">
          <label htmlFor="re-enter-password">Password: </label>
          <input type="password" name="re-enter-password" placeholder="Re-enter Password"/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}