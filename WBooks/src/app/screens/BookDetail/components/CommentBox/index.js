import React, { Component } from 'react';
import { View } from 'react-native';

import Comment from './components/Comment';
import { comments } from './constants/comments';
import styles from './styles';
import { QUANTITY_RENDER } from './constants/quantityRenderComment';
import CommentBoxLayout from './layout';

class CommentBox extends Component {
  renderComment = ({ item }) => (
    <Comment image={item.image_url} user={item.user_name} comment={item.comment} />
  );

  keyExtractor = item => `${item.id}`;

  separator = () => <View style={styles.separator} />;

  data = () => comments.slice(0, QUANTITY_RENDER);

  render() {
    return (
      <CommentBoxLayout
        data={this.data()}
        renderItem={this.renderComment}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.separator}
      />
    );
  }
}

export default CommentBox;
