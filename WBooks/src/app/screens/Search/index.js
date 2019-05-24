import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getBooksSelector } from './utils/selector';
import SearchComposed from './composition';
import styles from './styles';

class Search extends Component {
  render() {
    const { books, text } = this.props;
    return (
      <View style={styles.container}>
        <SearchComposed data={books} text={text} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: getBooksSelector(state),
  text: state.search.text
});

export default connect(mapStateToProps)(Search);
