import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

function AuthLoadingLayout() {
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingLayout;
