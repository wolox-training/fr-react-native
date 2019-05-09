import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function Comment({ image, user, comment }) {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.userText}>{user}</Text>
        </View>
        <View style={styles.textCommentContainer}>
          <Text style={styles.commentText}>{comment}</Text>
        </View>
      </View>
    </View>
  );
}

export default Comment;
