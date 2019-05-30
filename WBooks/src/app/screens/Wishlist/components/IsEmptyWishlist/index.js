import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

import { thereIsNoBooks } from './constants';
import styles from './styles';

function IsEmptyWishlist() {
  return (
    <View style={styles.container}>
      <Fragment>
        <Text style={styles.title}>{thereIsNoBooks}</Text>
      </Fragment>
    </View>
  );
}

export default IsEmptyWishlist;
