import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { ROUTES } from '../constants/routes';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';

const LibraryNavigator = createStackNavigator({
  [ROUTES.Library]: {
    screen: Library
  },
  [ROUTES.BookDetail]: {
    screen: BookDetail
  }
});

const AppNavigator = createAppContainer(LibraryNavigator);

function MyApp() {
  return <AppNavigator />;
}

export default MyApp;
