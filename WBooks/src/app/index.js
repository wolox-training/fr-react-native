import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
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
    Library: LibraryNavigator,
    Wishlist: WishlistNavigator,
    Addnew: AddNewNavigator,
    Rentals: RentalsNavigator,
    Settings: SettingsNavigator
  },
  {
    defaultNavigationOptions: defaultNavigationOptionsTab
  }
);

const AppNavigator = createAppContainer(TabNavigator);

function MyApp() {
  return <Login />;
}

export default MyApp;
