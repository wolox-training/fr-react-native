import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import ImageBook from '../../../../components/ImageBook';

import { genericBook } from './constants/genericBook';
import styles from './styles';

class DetailBox extends Component {
  handleAddToWishlist = () => {};

  handleRentBook = () => {};

  render() {
    const { navigation } = this.props;
    const book = navigation.getParam('book', {});
    const { image_url: image, title, author, year } = book;
    console.log(title);
    return (
      <View style={styles.bookContainer}>
        <View style={styles.detailContainer}>
          <View style={styles.imageContainer}>
            <ImageBook style={styles.image} source={image} />
          </View>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
              <Text style={styles.isAvailable}>{genericBook.isAvailable}</Text>
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
          <View>
            <Button onPress={this.handleAddToWishlist} title="ADD TO WISHLIST" />
          </View>
          <View>
            <Button onPress={this.handleRentBook} title="RENT" />
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(DetailBox);
