import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { ROUTES } from '@constants/routes';
import { login } from '@redux/login/actions';
import { connect } from 'react-redux';

import LoginLayout from './layout';

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
    return (
      <LoginLayout
        updateUser={this.updateUser}
        updatePassword={this.updatePassword}
        logInSuccessful={this.logInSuccessful}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.loginHasErrored,
    isLoading: state.loginIsLoading,
    data: state.loginAuthSuccess
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
