import React, { Component } from 'react';
import { Image } from 'react-native';

import { ROUTES } from '../../../constants/routes';

import styles from './styles';
import { icons, ACTIVE, PASSIVE } from './constants/iconsName';

class IconTab extends Component {
  getIconName = routeName => {
    switch (routeName) {
      case ROUTES.Library:
        return 'library';
      case ROUTES.Settings:
        return 'settings';
      case ROUTES.Wishlist:
        return 'wishlist';
      case ROUTES.Rentals:
        return 'myRentals';
      case ROUTES.Addnew:
        return 'addNew';
      default:
        return '';
    }
  };

  render() {
    const { route, focused } = this.props;
    const iconName = `${this.getIconName(route)}${focused ? ACTIVE : PASSIVE}`;
    const particularIcon = icons[iconName];
    return <Image style={styles.image} source={particularIcon} />;
  }
}

export default IconTab;
