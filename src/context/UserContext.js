import React, { Component } from 'react'

const UserContext = React.createContext({
  loggedInStatus: false,
  loginSuccess: () => {},
  logOut: () => {}
})

export default UserContext

export class UserProvider extends Component {
  state = {
    loggedInStatus: false
  };

  loginSuccess = () => {
    this.setState({ loggedInStatus: true })
  }

  logOut = () => {
    this.setState({ loggedInStatus: false })
  }

  render() {
    const value = {
      loggedInStatus: this.state.loggedInStatus,
      loginSuccess: this.loginSuccess,
      logOut: this.logOut
    }
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}