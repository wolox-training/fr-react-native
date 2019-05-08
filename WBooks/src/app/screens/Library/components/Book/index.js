import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import imageNoExists from '../../../../../assets/general/no_book_question.jpg';
import { ROUTES } from '../../../../../constants/routes';
import { navigationProptype } from '../../../../../propTypes/navigation';

import styles from './styles';

class Book extends Component {
  handlePress = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(ROUTES.BookDetail);
  };

  render() {
    const { image, title, author } = this.props;
    const imageSource = image ? { uri: image } : imageNoExists;
    return (
      <TouchableOpacity style={styles.bookContainer} onPress={this.handlePress}>
        <View style={styles.bookImage}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <View style={styles.titleAndAuthor}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  navigation: navigationProptype.isRequired
};

export default withNavigation(Book);
