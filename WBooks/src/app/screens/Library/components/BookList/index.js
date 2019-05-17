import React, { Component } from 'react';
import { View } from 'react-native';
import booksInfo from '@constants/books';

import Book from '../Book';

import styles from './styles';
import BookListLayout from './layout';

class BookList extends Component {
  keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => <Book id={item.id} />;

  separator = () => <View style={styles.separator} />;

  render() {
    return (
      <BookListLayout
        data={booksInfo}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.separator}
      />
    );
  }
}

export default BookList;
