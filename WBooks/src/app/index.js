import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { ROUTES } from '../constants/routes';
import {
  navigationOptionsStyle,
  navigationOptionsLibrary,
  navigationOptionsBookDetail,
  defaultNavigationOptionsTab,
  navigationOptionsAddnew,
  navigationOptionsRentals,
  navigationOptionsSettings,
  navigationOptionsWishlist
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

const WishlistNavigator = createStackNavigator(
  {
    [ROUTES.Wishlist]: {
      screen: Wishlist,
      navigationOptions: navigationOptionsWishlist
    }
  },
  {
    defaultNavigationOptions: navigationOptionsStyle
  }
);

const AddNewNavigator = createStackNavigator(
  {
    [ROUTES.Addnew]: {
      screen: Addnew,
      navigationOptions: navigationOptionsAddnew
    }
  },
  {
    defaultNavigationOptions: navigationOptionsStyle
  }
);

const RentalsNavigator = createStackNavigator(
  {
    [ROUTES.Rentals]: {
      screen: Rentals,
      navigationOptions: navigationOptionsRentals
    }
  },
  {
    defaultNavigationOptions: navigationOptionsStyle
  }
);

const SettingsNavigator = createStackNavigator(
  {
    [ROUTES.Settings]: {
      screen: Settings,
      navigationOptions: navigationOptionsSettings
    }
  },
  {
    defaultNavigationOptions: navigationOptionsStyle
  }
);

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
  return <AppNavigator />;
}

export default MyApp;
