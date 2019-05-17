import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { login } from '@redux/login/actions';
import { connect } from 'react-redux';

import { validateEmail } from './constants/validations/emailValidation';
import { validatePassword } from './constants/validations/passwordValidation';
import LoginLayout from './layout';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  updateUser = text => this.setState({ user: text });

  updatePassword = text => this.setState({ password: text });

  validateEmail = email => validateEmail(email);

  validatePassword = password => validatePassword(password);

  logInSuccessful = () => {
    const {
      navigation: { navigate },
      login
    } = this.props;
    const { user, password } = this.state;

    console.log(this.validateEmail(user), this.validatePassword(password));
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
