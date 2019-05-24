import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SearchComposed from './composition';
import styles from './styles';

class Search extends Component {
  filterBooks = (text, books) =>
    books.filter(book => book.title.toLowerCase().includes(text.toLowerCase())).sort();

  render() {
    const { text, books } = this.props;
    const data = this.filterBooks(text, books);
    return (
      <View style={styles.container}>
        <SearchComposed data={data} text={text} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  text: state.search.text,
  books: state.books.books
});

export default connect(mapStateToProps)(Search);
