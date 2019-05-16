import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { ROUTES } from '@constants/routes';
class AuthLoading extends React.Component {
  // Fetch the token from storage then navigate to our appropriate place

  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    const {
      navigation: { navigate }
    } = this.props;
    navigate(ROUTES.Auth);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default withNavigation(AuthLoading);
