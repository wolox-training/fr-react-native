import React from 'react';
import { FlatList, View } from 'react-native';

import Book from '../Book';

import styles from './styles';

const keyExtractor = item => `${item.id}`;
const renderItem = ({ item }) => <Book id={item.id} />;
const separator = () => <View style={styles.separator} />;

function BookListLayout({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={separator}
    />
  );
}

export default BookListLayout;
