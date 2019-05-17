import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ROUTES } from '@constants/routes';

import AuthLoadingLayout from './layout';

class AuthLoading extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(ROUTES.Auth);
  };

  render() {
    return <AuthLoadingLayout />;
  }
}

export default withNavigation(AuthLoading);
