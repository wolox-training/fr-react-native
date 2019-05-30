import React from 'react';
import { StatusBar } from 'react-native';
import { white } from '@constants/colors';

function MyStatusBar() {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor={white}
      translucent={false}
      networkActivityIndicatorVisible
    />
  );
}

export default MyStatusBar;
