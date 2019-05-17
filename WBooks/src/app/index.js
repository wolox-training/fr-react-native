import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { ROUTES } from '@constants/routes';

import {
  navigationOptionsStyle,
  navigationOptionsLibrary,
  navigationOptionsTitle,
  defaultNavigationOptionsTab
} from '../config/navigationOptions';

import { createEmptyStack } from './utils/emptyStack';
import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import Wishlist from './screens/Wishlist';
import Addnew from './screens/Addnew';
import Rentals from './screens/Rentals';
import Settings from './screens/Settings';
import Login from './screens/Login';
import AuthLoading from './screens/AuthLoading';

const LibraryNavigator = createStackNavigator(
  {
    [ROUTES.Library]: {
      screen: Library,
      navigationOptions: navigationOptionsLibrary(ROUTES.Library)
    },
    [ROUTES.BookDetail]: {
      screen: BookDetail,
      navigationOptions: navigationOptionsTitle(ROUTES.BookDetail)
    }
  },
  {
    defaultNavigationOptions: navigationOptionsStyle
  }
);

const WishlistNavigator = createEmptyStack(Wishlist, ROUTES.Wishlist);
const AddNewNavigator = createEmptyStack(Addnew, ROUTES.Addnew);
const RentalsNavigator = createEmptyStack(Rentals, ROUTES.Rentals);
const SettingsNavigator = createEmptyStack(Settings, ROUTES.Settings);

const TabNavigator = createBottomTabNavigator(
  {
    [ROUTES.Library]: LibraryNavigator,
    [ROUTES.Wishlist]: WishlistNavigator,
    [ROUTES.Addnew]: AddNewNavigator,
    [ROUTES.Rentals]: RentalsNavigator,
    [ROUTES.Settings]: SettingsNavigator
  },
  {
    defaultNavigationOptions: defaultNavigationOptionsTab
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    [ROUTES.AuthLoading]: AuthLoading,
    [ROUTES.App]: TabNavigator,
    [ROUTES.Auth]: Login
  },
  {
    initialRouteName: ROUTES.AuthLoading
  }
);
const AppNavigator = createAppContainer(SwitchNavigator);

function MyApp() {
  return <AppNavigator />;
}

export default MyApp;
