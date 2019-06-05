import React from 'react';
import { View, ScrollView } from 'react-native';

import CommentBox from './components/CommentBox';
import DetailBox from './components/DetailBox';
import styles from './styles';

function BookDetail() {
  return (
    <View style={styles.bookDetailContainer}>
      <ScrollView>
        <View style={{ marginHorizontal: 25 }}>
          <View style={styles.detailBoxContainer}>
            <DetailBox />
          </View>
          <View style={styles.commentBoxContainer}>
            <CommentBox />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BookDetail;
