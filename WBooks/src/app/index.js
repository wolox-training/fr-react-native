import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Library } from './screens/Library';
import { BookDetail } from './screens/BookDetail';

function MyApp() {
  return <LibraryNavigator />;
}

const LibraryNavigator = createStackNavigator(
  {
    Library: {
      screen: Library
    },
    BookDetailScreen: {
      screen: BookDetail
    }
  },
  {
    initialRouteName: 'Library'
  }
);

export default MyApp;
