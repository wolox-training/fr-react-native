import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/wishlist/actions';

import styles from './styles';
import Book from './components/Book';

const { width: viewportWidth } = Dimensions.get('window');
export class Wishlist extends Component {
  renderItem = ({ item, index }) => <Book id={item.id} />;

  render() {
    const { books } = this.props;
    return (
      <View style={styles.container}>
        <Carousel
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

const mapDispatchToProps = dispatch => ({
  removeFromWishlist: id => dispatch(actionCreators.delete(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wishlist);
