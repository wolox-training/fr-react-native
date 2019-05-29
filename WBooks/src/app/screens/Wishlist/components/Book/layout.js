import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImageBook from '@app/components/ImageBook';
import RentButton from '@app/components/RentButton';

import { isAvailable } from './utils/isAvailable';
import { genericBook } from './constants/genericBook';
import styles from './styles';

function BookLayout({ image, title, handleRemoveBook }) {
  const rentButtonStyle = isAvailable(styles.rentButtonAvailable, styles.rentButtonNotAvailable);
  const disabled = !genericBook.isAvailable;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBook source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.removeContainer, styles.heightButtons]} onPress={handleRemoveBook}>
          <Text style={styles.removeText}>Remove from Wishlist</Text>
        </TouchableOpacity>
        <RentButton
          rentButtonStyle={rentButtonStyle}
          disabled={disabled}
          style={[styles.rentContainer, styles.heightButtons]}
        />
      </View>
    </View>
  );
}

export default BookLayout;
