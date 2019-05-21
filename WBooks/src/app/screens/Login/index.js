import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { actionCreators } from '@redux/login/actions';
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
    const { error, isLoading } = this.props;
    const { messageError } = this.state;
    const message = Object.values(error).length ? INCORRECT_USER_AND_PASSWORD : messageError;
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
    error: state.auth.error,
    isLoading: state.auth.isLoading,
    data: state.auth.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user, password) => dispatch(actionCreators.login(user, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Login));
