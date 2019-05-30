import { createStackNavigator } from 'react-navigation';
import { navigationOptionsStyle, navigationOptionsTitle, defaultNavigationOptions } from '@config/navigationOptions';

export const createEmptyStack = (component, route) =>
  createStackNavigator(
    {
      [route]: {
        screen: component,
        navigationOptions: navigationOptionsTitle(route)
      }
    },
    defaultNavigationOptions
  );
