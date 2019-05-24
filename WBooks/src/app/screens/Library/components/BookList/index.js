import React, { Component } from 'react';
import { actionCreators } from '@redux/books/actions';
import { connect } from 'react-redux';

import BookListCompose from './composition';

class BookList extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }

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

const mapStateToProps = state => ({
  error: state.books.booksError,
  isLoading: state.books.booksLoading,
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
