import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation, NavigationActions, StackActions, SwitchActions } from 'react-navigation';
import { ROUTES } from '@constants/routes';

import { asyncStorageOperations } from './asyncStorageOperations';

// const resetNavigatorAndGoToLogin = StackActions.reset({
//   index: 0,
//   actions: [
//     SwitchActions.jumpTo({
//       routeName: ROUTES.Auth
//     })
//   ]
// });

class Addnew extends Component {
  logOut = () => {
    const {
      navigation: { navigate }
    } = this.props;
    asyncStorageOperations.removeAccessToken();
    asyncStorageOperations.removeClient();
    asyncStorageOperations.removeUserId();
    navigate(ROUTES.Auth);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Addnew);
