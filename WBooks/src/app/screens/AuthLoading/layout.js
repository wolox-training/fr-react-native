import React, { Fragment } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

function AuthLoadingLayout() {
  return (
    <Fragment>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </Fragment>
  );
}

export default AuthLoadingLayout;
