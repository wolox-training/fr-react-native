import React, { Component } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import greenTick from '@assets/general/greenTick.png';
import ImageLoader from '@app/components/ImageLoader';
import { lightGreen } from '@constants/colors';

import { buttonText } from '../../constants/text';

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
    const { rentButtonStyle, disabled } = this.props;
    const animateWidth = counter.interpolate({
      inputRange: [0, 1],
      outputRange: [width, height]
    });
    const color = counter.interpolate({
      inputRange: [0, 1],
      outputRange: [rentButtonStyle.backgroundColor, lightGreen]
    });
    return (
      <TouchableOpacity
        onPress={this.onPress}
        disabled={disabled || onPress}
        onLayout={event => this.setWidthAndHeight(event)}
      >
        <Animated.View
          style={[
            styles.genericStyleButton,
            rentButtonStyle,
            { backgroundColor: color },
            {
              width: animateWidth
            }
          ]}
        >
          {!onPress ? (
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
