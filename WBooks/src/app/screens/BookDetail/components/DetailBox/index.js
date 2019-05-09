import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import ImageBook from '../../../../components/ImageBook';

import { genericBook } from './constants/genericBook';
import { availability, buttonText } from './constants/text';
import styles from './styles';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', {});
    const { image_url: image, title, author, year } = book;
    const availabilityStyle = genericBook.isAvailable ? styles.available : styles.notAvailable;
    const availabilityText = genericBook.isAvailable ? availability.available : availability.notAvailable;
    const rentButtonStyle = genericBook.isAvailable
      ? styles.rentButtonAvailable
      : styles.rentButtonNotAvailable;
    const textButtonRentStyle = genericBook.isAvailable ? styles.textAvailable : styles.textNotAvailable;
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
              <Text style={availabilityStyle}>{availabilityText}</Text>
            </View>
            <View>
              <Text style={styles.author}>{author}</Text>
            </View>
            <View>
              <Text style={styles.year}>{year}</Text>
            </View>
            <View>
              <Text style={styles.type}>{genericBook.type}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={this.handleAddToWishlist}
            style={[styles.genericStyleButton, styles.wishlistButton]}
          >
            <Text style={[styles.genericTextButton, styles.wishlistText]}>{buttonText.wishlist}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleRentBook}
            style={[styles.genericStyleButton, rentButtonStyle]}
            disabled={disabled}
          >
            <Text style={[styles.genericTextButton, textButtonRentStyle]}>{buttonText.rent}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(DetailBox);
