import React from 'react';
import { FlatList } from 'react-native';

function BookListLayout({ data, keyExtractor, renderItem, ItemSeparatorComponent }) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
}

export default BookListLayout;
