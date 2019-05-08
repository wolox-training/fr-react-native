import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';

import styles from './styles';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    return (
      <View style={styles.bookContainer}>
        <View style={styles.detailContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.title} />
            </View>
            <View>
              <Text style={styles.isAvailable} />
            </View>
            <View>
              <Text style={styles.author} />
            </View>
            <View>
              <Text style={styles.year} />
            </View>
            <View>
              <Text style={styles.type} />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View>
            <Button onPress={handleAddToWishlist} title="ADD TO WISHLIST" />
          </View>
          <View>
            <Button onPress={handleRentBook} title="RENT" />
          </View>
        </View>
      </View>
    );
  }
}

export default DetailBox;
