import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import DetailBoxLayout from './layout';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', {});
    const {
      image: { url: image },
      title,
      author,
      year,
      genre
    } = book;

    console.log(image);
    return (
      <DetailBoxLayout
        image={image}
        title={title}
        author={author}
        year={year}
        genre={genre}
        handleRentBook={this.handleRentBook}
        handleAddToWishlist={this.handleAddToWishlist}
      />
    );
  }
}

export default withNavigation(DetailBox);
