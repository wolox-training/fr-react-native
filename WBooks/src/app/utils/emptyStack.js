import { createStackNavigator } from 'react-navigation';
import { navigationOptionsStyle, navigationOptionsTitle } from '@config/navigationOptions';

export const createEmptyStack = (component, route) =>
  createStackNavigator(
    {
      [route]: {
        screen: component,
        navigationOptions: navigationOptionsTitle(route)
      }
    },
    {
      defaultNavigationOptions: navigationOptionsStyle
    }
  );
