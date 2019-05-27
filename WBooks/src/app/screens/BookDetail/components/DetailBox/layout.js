import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ImageBook from '@app/components/ImageBook';

import styles from './styles';
import { buttonText, availability } from './constants/text';
import { genericBook } from './constants/genericBook';
import { isAvailable } from './utils/isAvailable';
import RentButton from './components/RentButton';

function DetailBoxLayout({ image, title, author, year, genre, handleRentBook, handleAddToWishlist }) {
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
        >
          <Text style={[styles.buttonAndAvailableDesign, styles.wishlistText]}>{buttonText.wishlist}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={handleRentBook}
          style={[styles.genericStyleButton, rentButtonStyle]}
          disabled={disabled}
        >
          <Text style={[styles.textAvailable]}>{buttonText.rent}</Text>
        </TouchableOpacity> */}
        <RentButton handleRentBook={handleRentBook} rentButtonStyle={rentButtonStyle} disabled={disabled} />
      </View>
    </View>
  );
}

export default DetailBoxLayout;
