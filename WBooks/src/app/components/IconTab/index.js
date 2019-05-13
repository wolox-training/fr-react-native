import React from 'react';
import { Image } from 'react-native';

import styles from './styles';
import { icons } from './constants/iconsName';

function IconTab({ icon }) {
  const particularIcon = icons[icon];
  return <Image style={[styles.image]} source={particularIcon} />;
}

export default IconTab;
