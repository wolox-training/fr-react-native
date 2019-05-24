import React from 'react';
import { Image, View, Text } from 'react-native';
import searchIcon from '@assets/navigation_bar/search.png';

import styles from './styles';

function IsEmptyList() {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.image} />
      <View>
        <Text style={styles.title}>Search in WBooks</Text>
      </View>
      <View>
        <Text style={styles.message}>Find your favorite writer and books</Text>
      </View>
    </View>
  );
}

export default IsEmptyList;
