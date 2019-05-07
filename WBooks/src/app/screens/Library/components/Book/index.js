import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import imageNoExists from '../../../../../assets/general/no_book_question.jpg';

import styles from './styles';

function Book({ image, title, author }) {
  const imageSource = image ? { uri: image } : imageNoExists;
  return (
    <View style={styles.bookContainer}>
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
    </View>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Book;
