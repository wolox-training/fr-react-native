import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import BookList from './components/BookList';

class Library extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <BookList />
      </ScrollView>
    );
  }
}

export default Library;
