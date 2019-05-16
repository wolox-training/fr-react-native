import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import LoginLayout from './layout';
import { ROUTES } from '@constants/routes';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  updateUser = text => this.setState({ user: text });

  updatePassword = text => this.setState({ password: text });

  logInSuccessful = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(ROUTES.App);
  };

  render() {
    return <LoginLayout updateUser={this.updateUser} updatePassword={this.updatePassword} logInSuccessful={this.logInSuccessful}/>;
  }
}

export default withNavigation(Login);
