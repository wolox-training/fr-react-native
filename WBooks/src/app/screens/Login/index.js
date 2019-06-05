import React, { Component } from 'react';
import { getFormValues, change } from 'redux-form';
import { actionCreators } from '@redux/auth/actions';
import { connect } from 'react-redux';

import LoginLayout from './layout';

const mapStateToProps = state => ({
  errorAuth: state.auth.error,
  isLoading: state.auth.isLoading,
  data: state.auth.data,
  formValues: getFormValues('login')(state)
});

const mapDispatchToProps = dispatch => ({
  login: (user, password) => dispatch(actionCreators.login(user, password)),
  onChange: (nameField, value) => dispatch(change('login', nameField, value)),
  removeError: () => dispatch(actionCreators.removeError())
});

class Login extends Component {
  submit = values => {
    const { login } = this.props;
    const { user, password } = values;
    login(user, password);
  };

  onHandleChange = nameField => value => {
    const { onChange, removeError } = this.props;
    removeError();
    onChange(nameField, value.nativeEvent.text);
  };

  render() {
    const { isLoading, errorAuth } = this.props;
    return (
      <LoginLayout
        errorLogIn={errorAuth}
        isLoading={isLoading}
        onSubmit={this.submit}
        onChange={this.onHandleChange}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
