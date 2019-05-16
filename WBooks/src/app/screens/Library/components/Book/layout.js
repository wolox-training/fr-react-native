import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImageBook from '@app/components/ImageBook';

import styles from './styles';

function BookLayout({ handlePress, image, title, author }) {
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={handlePress}>
      <View style={styles.bookImage}>
        <ImageBook style={styles.image} source={image} />
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

export default BookLayout;
