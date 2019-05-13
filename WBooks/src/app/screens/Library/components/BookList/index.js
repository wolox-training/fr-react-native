import React, { Component, Fragment } from 'react';
import { View, FlatList } from 'react-native';

import booksInfo from '../../../../../constants/books';
import Book from '../Book';

import styles from './styles';

class BookList extends Component {
  keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => <Book id={item.id} />;

  separator = () => <View style={styles.separator} />;

  render() {
    return (
      <Fragment>
        <FlatList
          data={booksInfo}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.separator}
        />
      </Fragment>
    );
  }
}

export default BookList;
