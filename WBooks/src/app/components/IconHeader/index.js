import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import { icons } from './constants/iconsName';

class IconHeader extends Component {
  navigate = () => {
    const {
      navigation: { navigate },
      route
    } = this.props;
    navigate(route);
  };

  render() {
    const { icon, style } = this.props;
    const particularIcon = icons[icon];
    return (
      <TouchableOpacity onPress={this.navigate}>
        <Image style={[styles.image, style]} source={particularIcon} />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(IconHeader);
