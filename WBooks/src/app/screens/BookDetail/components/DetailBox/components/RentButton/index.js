import React, { Component } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import greenTick from '@assets/general/greenTick.png';
import ImageLoader from '@app/components/ImageLoader';

import { buttonText } from '../../constants/text';

import styles from './styles';

class RentButton extends Component {
  state = {
    borderRadius: new Animated.Value(25),
    onPress: false,
    width: null,
    height: null
  };

  onPress = () => {
    const { handleRentBook } = this.props;
    this.setState({ onPress: true });
    this.onClickWidth();
  };

  onClickWidth = () => {
    Animated.parallel([
      Animated.timing(this.state.width, {
        toValue: this.state.height,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(this.state.borderRadius, {
        toValue: 50,
        duration: 300,
        useNativeDriver: false
      })
    ]).start();
  };

  setWidthAndHeight = event => {
    if (!this.state.onPress) {
      const { width, height } = event.nativeEvent.layout;
      console.log(width);
      this.setState({ width: new Animated.Value(width), height });
    }
  };

  render() {
    const { rentButtonStyle, disabled } = this.props;
    return (
      <TouchableOpacity
        onPress={this.onPress}
        disabled={disabled}
        onLayout={event => this.setWidthAndHeight(event)}
      >
        <Animated.View style={[styles.genericStyleButton, rentButtonStyle, { width: this.state.width }]}>
          {!this.state.onPress ? (
            <Text style={styles.textAvailable}>{buttonText.rent}</Text>
          ) : (
            <ImageLoader source={greenTick} style={styles.imageTick} />
          )}
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default RentButton;
