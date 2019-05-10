import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { icons } from './constants/iconsName';

function IconHeader({ icon, action, style }) {
  const particularIcon = icons[icon];
  return (
    <TouchableOpacity onPress={action}>
      <Image style={[styles.image, style]} source={particularIcon} />
    </TouchableOpacity>
  );
}

export default IconHeader;
