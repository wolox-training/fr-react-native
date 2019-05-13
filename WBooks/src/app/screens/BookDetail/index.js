import React from 'react';
import { View, ScrollView } from 'react-native';

import CommentBox from './components/CommentBox';
import DetailBox from './components/DetailBox';
import styles from './styles';

function BookDetail() {
  return (
    <ScrollView style={styles.bookDetailContainer}>
      <View style={styles.detailBoxContainer}>
        <DetailBox />
      </View>
      <View style={styles.commentBoxContainer}>
        <CommentBox />
      </View>
    </ScrollView>
  );
}

export default BookDetail;
