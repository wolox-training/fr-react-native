import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function IsEmptyWishlist() {
  return (
    <View style={styles.container}>
      <Fragment>
        <Text style={styles.title}>There are no books in the wishlist</Text>
      </Fragment>
    </View>
  );
}

export default IsEmptyWishlist;
