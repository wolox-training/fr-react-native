import React, { Component } from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import booksInfo from './../../../constants/booksInfo';
class BookList extends Component {
    render() {
      return (
        <View style={styles.bookContainer}>
            <FlatList
            data={this.props.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
        </View>
      );
    }
  }

  export default BookList;