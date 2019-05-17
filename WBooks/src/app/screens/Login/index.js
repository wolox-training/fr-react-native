import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { ROUTES } from '@constants/routes';

import LoginLayout from './layout';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  update = param => text => this.setState({ [param]: text });

  logInSuccessful = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(ROUTES.App);
  };

  render() {
    return (
      <LoginLayout
        updateUser={this.update('user')}
        updatePassword={this.update('password')}
        logInSuccessful={this.logInSuccessful}
      />
    );
  }
}

export default withNavigation(Login);
