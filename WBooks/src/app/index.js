import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { ROUTES } from '../constants/routes';
import {
  navigationOptionsStyle,
  navigationOptionsLibrary,
  navigationOptionsBookDetail
} from '../config/navigationOptions';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';

const LibraryNavigator = createStackNavigator(
  {
    [ROUTES.Library]: {
      screen: Library,
      navigationOptions: navigationOptionsLibrary
    },
    [ROUTES.BookDetail]: {
      screen: BookDetail,
      navigationOptions: navigationOptionsBookDetail
    }
  },
  {
    defaultNavigationOptions: navigationOptionsStyle
  }
);

const AppNavigator = createAppContainer(LibraryNavigator);

function MyApp() {
  return <AppNavigator />;
}

export default MyApp;
