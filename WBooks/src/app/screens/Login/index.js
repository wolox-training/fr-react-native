import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { actionCreators } from '@redux/auth/actions';
import { connect } from 'react-redux';

import { validateEmail } from './constants/validations/emailValidation';
import { validatePassword } from './constants/validations/passwordValidation';
import LoginLayout from './layout';
import { INCORRECT_USER_AND_PASSWORD } from './constants/texts';

class Login extends Component {
  state = {
    user: '',
    password: '',
    tryLogIn: false,
    messageError: ''
  };

  update = param => text => this.setState({ [param]: text });

  updateMessageError = text => this.setState({ messageError: text });

  logInSuccessful = async () => {
    this.setState({ tryLogIn: false });
    const { login } = this.props;
    const { user, password } = this.state;
    const resultEmailValidation = validateEmail(user);
    const resultPasswordValidation = validatePassword(password);
    if (resultEmailValidation.isSuccess() && resultPasswordValidation.isSuccess()) {
      this.updateMessageError('');
      login(user, password);
      this.setState({ tryLogIn: true });
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
    const { messageError, tryLogIn } = this.state;
    const message = tryLogIn
      ? Object.values(error).length
        ? INCORRECT_USER_AND_PASSWORD
        : ''
      : messageError;
    console.log(message);
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

const mapStateToProps = state => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading,
  data: state.auth.data
});

const mapDispatchToProps = dispatch => ({
  login: (user, password) => dispatch(actionCreators.login(user, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Login));
