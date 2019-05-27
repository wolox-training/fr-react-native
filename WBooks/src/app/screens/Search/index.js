import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getBooksSelector, getEmptyInputSelector } from './utils/selector';
import SearchComposed from './composition';
import styles from './styles';

class Search extends Component {
  render() {
    const { books, isEmptyInput } = this.props;
    return (
      <View style={styles.container}>
        <SearchComposed data={books} isEmptyInput={isEmptyInput} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: getBooksSelector(state),
  isEmptyInput: getEmptyInputSelector(state)
});

export default connect(mapStateToProps)(Search);
