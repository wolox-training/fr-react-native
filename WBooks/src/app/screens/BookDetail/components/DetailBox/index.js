import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { genericBook } from './constants/genericBook';
import { isAvailable } from './utils/isAvailable';
import { availability } from './constants/text';
import styles from './styles';
import DetailBoxLayout from './layout';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', {});
    const { image_url: image, title, author, year } = book;
    const availabilityStyle = isAvailable(styles.available, styles.notAvailable);
    const availabilityText = isAvailable(availability.available, availability.notAvailable);
    const rentButtonStyle = isAvailable(styles.rentButtonAvailable, styles.rentButtonNotAvailable);
    const disabled = !genericBook.isAvailable;
    return (
      <DetailBoxLayout
        image={image}
        title={title}
        author={author}
        year={year}
        availabilityStyle={availabilityStyle}
        availabilityText={availabilityText}
        rentButtonStyle={rentButtonStyle}
        disabled={disabled}
        handleRentBook={this.handleRentBook}
        handleAddToWishlist={this.handleAddToWishlist}
      />
    );
  }
}

export default withNavigation(DetailBox);
