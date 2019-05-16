import React, { Fragment } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import { viewAll } from './constants/text';
import styles from './styles';

function CommentBoxLayout({ data, keyExtractor, renderItem, ItemSeparatorComponent }) {
  return (
    <Fragment>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.textViewAll}>{viewAll}</Text>
      </TouchableOpacity>
    </Fragment>
  );
}

export default CommentBoxLayout;
