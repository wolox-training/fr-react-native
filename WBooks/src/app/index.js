import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { ROUTES } from '../constants/routes';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import { navigationOptionsStyle } from './styles';

const LibraryNavigator = createStackNavigator(
  {
    [ROUTES.Library]: {
      screen: Library
    },
    [ROUTES.BookDetail]: {
      screen: BookDetail
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
