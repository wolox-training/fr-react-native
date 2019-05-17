import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';


import DetailBoxLayout from './layout';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', {});
    const { image_url: image, title, author, year } = book;

    return (
      <DetailBoxLayout
        image={image}
        title={title}
        author={author}
        year={year}
        handleRentBook={this.handleRentBook}
        handleAddToWishlist={this.handleAddToWishlist}
      />
    );
  }
}

export default withNavigation(DetailBox);
