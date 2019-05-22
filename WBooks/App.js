import React from 'react';
import { AsyncStorage } from 'react-native';

import MyApp from './src/app';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function index() {
  AsyncStorage.clear();
  return <MyApp />;
}
