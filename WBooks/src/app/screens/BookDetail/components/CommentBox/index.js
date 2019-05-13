import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';

import Comment from './components/Comment';
import { comments } from './constants/comments';
import styles from './styles';
import { QUANTITY_RENDER } from './constants/quantityRenderComment';
import { viewAll } from './constants/text';

class CommentBox extends Component {
  renderComment = ({ item }) => (
    <Comment image={item.image_url} user={item.user_name} comment={item.comment} />
  );

  keyExtractor = item => `${item.id}`;

  separator = () => <View style={styles.separator} />;

  render() {
    return (
      <ScrollView>
        <FlatList
          data={comments.slice(0, QUANTITY_RENDER)}
          renderItem={this.renderComment}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.separator}
        />
        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.textViewAll}>{viewAll}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default CommentBox;
