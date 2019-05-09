import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import ImageBook from '../../../../components/ImageBook';

import { genericBook } from './constants/genericBook';
import { availability } from './constants/availability';
import styles from './styles';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', {});
    const { image_url: image, title, author, year } = book;
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
              <Text style={genericBook.isAvailable ? styles.available : styles.notAvailable}>
                {genericBook.isAvailable ? availability.available : availability.notAvailable}
              </Text>
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
          <View style={[styles.genericStyleButton, styles.wishlistButton]}>
            <TouchableOpacity onPress={this.handleAddToWishlist}>
              <Text style={[styles.genericTextButton, styles.wishlistText]}>ADD TO WISHLIST</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.genericStyleButton,
              genericBook.isAvailable ? styles.rentButtonAvailable : styles.rentButtonNotAvailable
            ]}
          >
            <TouchableOpacity onPress={this.handleRentBook}>
              <Text
                style={[
                  styles.genericTextButton,
                  genericBook.isAvailable ? styles.textAvailable : styles.textNotAvailable
                ]}
              >
                RENT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(DetailBox);
