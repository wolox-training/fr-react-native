import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import ImageBook from '../../../../components/ImageBook';

import { genericBook } from './constants/genericBook';
import { isAvailable } from './utils/isAvailable';
import { availability, buttonText } from './constants/text';
import styles from './styles';

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
      <View style={styles.bookContainer}>
        <View style={styles.detailContainer}>
          <View>
            <ImageBook style={styles.image} source={image} />
          </View>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
              <Text style={[availabilityStyle, styles.buttonAndAvailableDesign]}>{availabilityText}</Text>
            </View>
            <View>
              <Text style={styles.textInfo}>{author}</Text>
            </View>
            <View>
              <Text style={styles.textInfo}>{year}</Text>
            </View>
            <View>
              <Text style={styles.textInfo}>{genericBook.type}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={this.handleAddToWishlist}
            style={[styles.genericStyleButton, styles.wishlistButton]}
          >
            <Text style={[styles.buttonAndAvailableDesign, styles.wishlistText]}>{buttonText.wishlist}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleRentBook}
            style={[styles.genericStyleButton, rentButtonStyle]}
            disabled={disabled}
          >
            <Text style={[styles.genericTextButton, styles.textAvailable]}>{buttonText.rent}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(DetailBox);
