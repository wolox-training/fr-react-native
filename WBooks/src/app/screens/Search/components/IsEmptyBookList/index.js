import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function IsEmptyBookList() {
  return (
    <View style={styles.container}>
      <Fragment>
        <Text style={styles.title}>There is no books with that name</Text>
      </Fragment>
    </View>
  );
}

export default IsEmptyBookList;
