import React, { Component } from 'react'
import './RegisterUserPage.css'
import '../../components/RegisterUserForm/RegisterUserForm'
import RegisterUserForm from '../../components/RegisterUserForm/RegisterUserForm'

export default class RegisterUserPage extends Component {
  render() {
    return (
      <section className="register-user-page">
        <h2>Register New Account</h2>
        <RegisterUserForm />
      </section>
    )
  }
}