import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import BookList from './components/BookList';

function Library() {
  return (
    <View style={styles.container}>
      <BookList />
    </View>
  );
}

export default Library;
