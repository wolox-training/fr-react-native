import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import bell from '../../../assets/navigation_bar/ic_notifications.png';
import search from '../../../assets/navigation_bar/ic_search.png';

import styles from './styles';

const icons = {
  bell,
  search
};
function IconHeader({ icon, action }) {
  const particularIcon = icons[icon];
  return (
    <TouchableOpacity onPress={action}>
      <Image style={styles.image} source={particularIcon} />
    </TouchableOpacity>
  );
}

export default IconHeader;
