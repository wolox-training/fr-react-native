import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { ROUTES } from '@constants/routes';
import { Provider, connect } from 'react-redux';
import configureStore from '@redux/store';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import {
  navigationOptionsLibrary,
  navigationOptionsTitle,
  navigationOptionsSearch,
  defaultNavigationOptionsTab,
  defaultNavigationOptions
} from '../config/navigationOptions';

import { createEmptyStack } from './utils/emptyStack';
import Library from './screens/Library';
import BookDetail from './screens/BookDetail';
import Wishlist from './screens/Wishlist';
import Addnew from './screens/Addnew';
import Rentals from './screens/Rentals';
import Settings from './screens/Settings';
import Login from './screens/Login';
import Search from './screens/Search';
import AuthLoading from './screens/AuthLoading';

const LibraryNavigator = createStackNavigator(
  {
    [ROUTES.Library]: {
      screen: Library,
      navigationOptions: navigationOptionsLibrary(ROUTES.Library, ROUTES.Search)
    },
    [ROUTES.Search]: {
      screen: Search,
      navigationOptions: navigationOptionsSearch()
    },
    [ROUTES.BookDetail]: {
      screen: BookDetail,
      navigationOptions: navigationOptionsTitle(ROUTES.BookDetail)
    }
  },
  defaultNavigationOptions
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

const navReducer = createNavigationReducer(AppNavigator);

const middlewareNav = createReactNavigationReduxMiddleware(state => state.nav);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore({}, navReducer, middlewareNav);
function MyApp() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}

export default MyApp;
