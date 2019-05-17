import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { login } from '@redux/login/actions';
import { connect } from 'react-redux';

import { emailRegEx } from './constants/regEx';
import LoginLayout from './layout';

import reactotron from '@app/../../ReactotronConfig';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  updateUser = text => this.setState({ user: text });

  updatePassword = text => this.setState({ password: text });

  validateEmail = email => emailRegEx.test(email);

  logInSuccessful = () => {
    const {
      navigation: { navigate },
      login
    } = this.props;
    const { user, password } = this.state;

    console.log(this.validateEmail(user));
    // navigate(ROUTES.App);
    login(user, password);
  };

  render() {
    const { hasErrored, isLoading, data } = this.props;
    const errorMessage = hasErrored ? 'Usuario y/o contrasena incorrectos' : '';
    return (
      <LoginLayout
        updateUser={this.updateUser}
        updatePassword={this.updatePassword}
        logInSuccessful={this.logInSuccessful}
        errorMessage={errorMessage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.loginHasErrored,
    isLoading: state.loginIsLoading,
    data: state.loginAuthSuccessData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user, password) => dispatch(login(user, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Login));
