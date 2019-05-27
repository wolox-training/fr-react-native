import React from 'react';
import { FlatList, View } from 'react-native';

import Book from '../Book';

import OpacityBook from './components/OpacityBook';
import styles from './styles';

const keyExtractor = item => `${item.id}`;
const renderItem = ({ item, index }) => (
  <OpacityBook index={index}>
    <Book id={item.id} />
  </OpacityBook>
);
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
