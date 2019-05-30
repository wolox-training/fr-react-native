import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/wishlist/actions';

import DetailBoxLayout from './layout';

class DetailBox extends Component {
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.book = navigation.getParam('book', {});
  }

  handleAddToWishlist = () => {
    const { id } = this.book;
    const { addToWishlist } = this.props;
    addToWishlist(id);
  };

  handleRemoveBook = () => {
    const { id } = this.book;
    const { deleteFromWishlist } = this.props;
    deleteFromWishlist(id);
  };

  handleRentBook = () => {};

  isOnWishlist = () => {
    const { wishlistBooks } = this.props;
    const { id } = this.book;
    return !!wishlistBooks.find(book => book.id === id);
  };

  render() {
    const {
      image: { url: image },
      title,
      author,
      year,
      genre
    } = this.book;
    return (
      <DetailBoxLayout
        image={image}
        title={title}
        author={author}
        year={year}
        genre={genre}
        handleRentBook={this.handleRentBook}
        handleAddToWishlist={this.handleAddToWishlist}
        handleRemoveBook={this.handleRemoveBook}
        addWishlist={this.isOnWishlist()}
      />
    );
  }
}

const mapStateToProps = state => ({
  wishlistBooks: state.wishlist.books
});

const mapDispatchToProps = dispatch => ({
  addToWishlist: id => dispatch(actionCreators.add(id)),
  deleteFromWishlist: id => dispatch(actionCreators.delete(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(DetailBox));
