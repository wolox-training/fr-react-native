import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookList from './components/BookList';

class Library extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookList />
      </View>
    );
  }
}

export default Library;
