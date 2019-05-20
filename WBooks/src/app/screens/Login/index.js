import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { login } from '@redux/login/actions';
import { connect } from 'react-redux';

import { validateEmail } from './constants/validations/emailValidation';
import { validatePassword } from './constants/validations/passwordValidation';
import LoginLayout from './layout';
import { INCORRECT_USER_AND_PASSWORD } from './constants/texts';

class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  update = param => text => this.setState({ [param]: text });

  updateMessageError = text => this.setState({ messageError: text });

  logInSuccessful = () => {
    const {
      navigation: { navigate },
      login
    } = this.props;
    const { user, password } = this.state;
    const resultEmailValidation = validateEmail(user);
    const resultPasswordValidation = validatePassword(password);
    if (resultEmailValidation.isSuccess() && resultPasswordValidation.isSuccess()) {
      this.updateMessageError('');
      login(user, password);
    } else {
      this.updateMessageError(
        `${resultEmailValidation.getOrElse()}${
          resultEmailValidation.isSuccess() ? resultPasswordValidation.getOrElse() : ''
        }`
      );
    }
  };

  render() {
    const { hasErrored, isLoading, data } = this.props;
    const { user, password, messageError } = this.state;
    const message = hasErrored ? INCORRECT_USER_AND_PASSWORD : messageError;
    return (
      <LoginLayout
        updateUser={this.update('user')}
        updatePassword={this.update('password')}
        logInSuccessful={this.logInSuccessful}
        isLoading={isLoading}
        errorMessage={message}
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
