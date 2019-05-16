import React, { Fragment } from 'react';
import { FlatList } from 'react-native';

function BookListLayout({ data, keyExtractor, renderItem, ItemSeparatorComponent }) {
  return (
    <Fragment>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </Fragment>
  );
}

export default BookListLayout;
