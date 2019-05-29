import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import WishlistComposed from './composition';
import styles from './styles';
import Book from './components/Book';

const { width: viewportWidth } = Dimensions.get('window');
export class Wishlist extends Component {
  renderItem = ({ item, index }) => <Book id={item.id} />;

  render() {
    const { books } = this.props;
    return (
      <View style={styles.container}>
        <WishlistComposed
          data={books}
          renderItem={this.renderItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.wishlist.books
});

export default connect(mapStateToProps)(Wishlist);
