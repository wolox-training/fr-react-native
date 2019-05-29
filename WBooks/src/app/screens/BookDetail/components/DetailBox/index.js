import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/wishlist/actions';

import DetailBoxLayout from './layout';

class DetailBox extends Component {
  book = null;

  handleAddToWishlist = () => {
    const { id } = this.book;
    const { addToWishlist } = this.props;
    addToWishlist(id);
  };

  handleRentBook = () => {};

  render() {
    const { navigation, wishlistBooks } = this.props;
    this.book = navigation.getParam('book', {});
    const {
      image: { url: image },
      title,
      author,
      year,
      genre,
      id
    } = this.book;
    const isOnWishlist = wishlistBooks.map(Id => Id.id).includes(id);
    return (
      <DetailBoxLayout
        image={image}
        title={title}
        author={author}
        year={year}
        genre={genre}
        handleRentBook={this.handleRentBook}
        handleAddToWishlist={this.handleAddToWishlist}
        addWishlist={isOnWishlist}
      />
    );
  }
}

const mapStateToProps = state => ({
  wishlistBooks: state.wishlist.books
});

const mapDispatchToProps = dispatch => ({
  addToWishlist: id => dispatch(actionCreators.add(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(DetailBox));
