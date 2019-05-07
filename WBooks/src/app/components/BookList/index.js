import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import booksInfo from '../../../constants/books.json';
import Book from '../Book';

class BookList extends Component {
    keyExtractor = (item) => `${item.id}`
    renderItem = ({item}) => (
        <Book
            image={item.image_url}
            title={item.title}
            author={item.author}
        />
    );
    separator = () => (
      <View style={styles.separator} />
    )
    render() {
      return (
        <View style={styles.bookContainer}>
            <FlatList
            data={booksInfo}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.separator}
            />
        </View>
      );
    }
  }

  export default BookList;