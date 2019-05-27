import React, { Fragment } from 'react';
import { Image, View, Text } from 'react-native';
import searchIcon from '@assets/navigation_bar/search.png';

import styles from './styles';

function IsEmptyInputText() {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.image} />
      <Fragment>
        <Text style={styles.title}>Search in WBooks</Text>
      </Fragment>
      <Fragment>
        <Text style={styles.message}>Find your favorite writer and books</Text>
      </Fragment>
    </View>
  );
}

export default IsEmptyInputText;
