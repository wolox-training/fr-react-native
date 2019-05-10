import React from 'react';
import { StyleSheet, Image } from 'react-native';

import headerBackground from '../assets/general/bc_nav_bar.png';
import back from '../assets/navigation_bar/ic_back.png';
import { white } from '../constants/colors';

export const styles = StyleSheet.create({
  imageBack: {
    height: 20,
    width: 20,
    marginLeft: 15
  }
});

export const navigationOptionsStyle = {
  headerBackground: <Image source={headerBackground} />,
  headerBackImage: <Image style={styles.imageBack} source={back} />,
  headerBackTitle: null,
  headerTitleStyle: {
    color: white,
    fontWeight: 'bold',
    fontSize: 17
  }
};
