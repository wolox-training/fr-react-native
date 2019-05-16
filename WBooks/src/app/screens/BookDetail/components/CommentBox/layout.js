import React from 'react';
import { View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';

import { viewAll } from './constants/text';

import styles from './styles';
function CommentBoxLayout({ data, keyExtractor, renderItem, ItemSeparatorComponent }) {
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
      <TouchableOpacity style={styles.viewAll}>
        <Text style={styles.textViewAll}>{viewAll}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default CommentBoxLayout;
