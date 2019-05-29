import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ImageBook from '@app/components/ImageBook';
import RentButton from '@app/components/RentButton';

import styles from './styles';
import { buttonText, availability } from './constants/text';
import { genericBook } from './constants/genericBook';
import { isAvailable } from './utils/isAvailable';

function DetailBoxLayout({ image, title, author, year, genre, handleRentBook, handleAddToWishlist, addWishlist }) {
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
            <Text style={styles.textInfo}>{genre}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleAddToWishlist}
          style={[styles.genericStyleButton, styles.wishlistButton]}
          disabled={addWishlist}
        >
          <Text style={[styles.buttonAndAvailableDesign, styles.wishlistText]}>{buttonText.wishlist}</Text>
        </TouchableOpacity>
        <RentButton handleRentBook={handleRentBook} rentButtonStyle={rentButtonStyle} disabled={disabled} />
      </View>
    </View>
  );
}

export default DetailBoxLayout;
