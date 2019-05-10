import React, { Component } from 'react';
import { View } from 'react-native';

import { ROUTES } from '../../../constants/routes';

import styles from './styles';
import BookList from './components/BookList';

class Library extends Component {
  static navigationOptions = {
    title: ROUTES.Library.toLocaleUpperCase()
  };

  render() {
    return (
      <View style={styles.container}>
        <BookList />
      </View>
    );
  }
}

export default Library;
