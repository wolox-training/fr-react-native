import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { ROUTES } from '../constants/routes';
import {
  navigationOptionsStyle,
  navigationOptionsLibrary,
  navigationOptionsBookDetail,
  defaultNavigationOptionsTab
} from '../config/navigationOptions';

import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import Wishlist from './screens/Wishlist';
import Addnew from './screens/Addnew';
import Rentals from './screens/Rentals';
import Settings from './screens/Settings';

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

const TabNavigator = createBottomTabNavigator(
  {
    Library: LibraryNavigator,
    Wishlist,
    Addnew,
    Rentals,
    Settings
  },
  {
    defaultNavigationOptions: defaultNavigationOptionsTab
  }
);

const AppNavigator = createAppContainer(TabNavigator);

function MyApp() {
  return <AppNavigator />;
}

export default MyApp;
