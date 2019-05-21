import React from 'react';
import { AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ROUTES } from '@constants/routes';

import { asyncStorageOperations } from './utils/asyncStorageOperations';
import AuthLoadingLayout from './layout';

class AuthLoading extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const {
      navigation: { navigate }
    } = this.props;

    const userToken = await asyncStorageOperations.getAccessToken();
    navigate(userToken ? ROUTES.App : ROUTES.Auth);
  };

  render() {
    return <AuthLoadingLayout />;
  }
}

export default withNavigation(AuthLoading);
