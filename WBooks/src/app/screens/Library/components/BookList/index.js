import React, { Component } from 'react';
import { View } from 'react-native';
import { bookActions } from '@redux/books/actions';
import { connect } from 'react-redux';

import Book from '../Book';

import BookListCompose from './composition';
import styles from './styles';

class BookList extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => <Book id={item.id} />;

  separator = () => <View style={styles.separator} />;

  render() {
    const { books, isLoading, error } = this.props;
    return (
      <BookListCompose
        data={books}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.separator}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.books.error,
    isLoading: state.books.isLoading,
    books: state.books.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(bookActions.getBooks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
