import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchComposed from './composition';

class Search extends Component {
  filterBooks = (text, books) =>
    books.filter(book => book.title.toLowerCase().includes(text.toLowerCase())).sort();

  render() {
    const { text, books } = this.props;
    const data = this.filterBooks(text, books);
    return <SearchComposed data={data} text={text} />;
  }
}

const mapStateToProps = state => ({
  text: state.search.text,
  books: state.books.books
});

export default connect(mapStateToProps)(Search);
