import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ImageBook from '@app/components/ImageBook';

import styles from './styles';
import { buttonText } from './constants/text';
import { genericBook } from './constants/genericBook';

function DetailBoxLayout({
  image,
  title,
  author,
  year,
  availabilityStyle,
  availabilityText,
  rentButtonStyle,
  disabled,
  handleRentBook,
  handleAddToWishlist
}) {
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
          onPress={handleAddToWishlist}
          style={[styles.genericStyleButton, styles.wishlistButton]}
        >
          <Text style={[styles.buttonAndAvailableDesign, styles.wishlistText]}>{buttonText.wishlist}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRentBook}
          style={[styles.genericStyleButton, rentButtonStyle]}
          disabled={disabled}
        >
          <Text style={[styles.genericTextButton, styles.textAvailable]}>{buttonText.rent}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DetailBoxLayout;
