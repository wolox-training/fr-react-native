import React from 'react';
import { Image } from 'react-native';

import styles from './styles';
import { icons } from './constants/iconsName';

function IconSearchBar({ icon, style }) {
  const particularIcon = icons[icon];
  return <Image style={[styles.image, style]} source={particularIcon} />;
}

export default IconSearchBar;
