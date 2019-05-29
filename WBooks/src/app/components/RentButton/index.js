import React, { Component } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import greenTick from '@assets/general/greenTick.png';
import ImageLoader from '@app/components/ImageLoader';
import { lightGreen, normalBlue } from '@constants/colors';

import { RENT } from './constants/texts';
import styles from './styles';

class RentButton extends Component {
  state = {
    counter: new Animated.Value(0),
    onPress: false,
    width: null,
    height: null
  };

  onPress = () => {
    const { handleRentBook } = this.props;
    this.setState({ onPress: true });
    this.onClick();
  };

  onClick = () => {
    const { counter } = this.state;
    Animated.timing(counter, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  setWidthAndHeight = event => {
    const { onPress } = this.state;
    if (!onPress) {
      const { width, height } = event.nativeEvent.layout;
      this.setState({ width, height });
    }
  };

  render() {
    const { counter, onPress, width, height } = this.state;
    const { rentButtonStyle, disabled, style } = this.props;
    const animateWidth = counter.interpolate({
      inputRange: [0, 1],
      outputRange: [width, height]
    });
    const color = counter.interpolate({
      inputRange: [0, 1],
      outputRange: [rentButtonStyle.backgroundColor, lightGreen]
    });
    const children = !onPress ? (
      <Text style={styles.textAvailable}>{RENT}</Text>
    ) : (
      <ImageLoader source={greenTick} style={styles.imageTick} />
    );
    return (
      <TouchableOpacity
        onPress={this.onPress}
        disabled={disabled || onPress}
        onLayout={event => this.setWidthAndHeight(event)}
        style={style}
      >
        {onPress ? (
          <Animated.View
            style={[
              styles.genericStyleButton,
              {
                backgroundColor: color,
                width: animateWidth
              }
            ]}
          >
            {children}
          </Animated.View>
        ) : (
          <LinearGradient
            colors={[rentButtonStyle.backgroundColor, normalBlue]}
            style={[styles.genericStyleButton, { flex: 1, width }]}
          >
            {children}
          </LinearGradient>
        )}
      </TouchableOpacity>
    );
  }
}

export default RentButton;
