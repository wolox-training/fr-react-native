import React, { Component } from 'react';
import { View } from 'react-native';
import { bookActions } from '@redux/books/actions';
import { connect } from 'react-redux';

import Book from '../Book';

import { composeConditionalRenders } from './composition';
import styles from './styles';
import BookListLayout from './layout';

class BookList extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

  keyExtractor = item => `${item.id}`;

  renderItem = ({ item }) => <Book id={item.id} />;

  separator = () => <View style={styles.separator} />;

  render() {
    const { books } = this.props;
    console.log(books);
    return (
      <BookListLayout
        data={books}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.separator}
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

// export default composeConditionalRenders(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(BookList)
// );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
