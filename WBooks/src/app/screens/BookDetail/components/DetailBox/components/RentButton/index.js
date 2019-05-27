import React, { Component } from 'react';
import { TouchableOpacity, Text, Animated } from 'react-native';
import greenTick from '@assets/general/greenTick.png';
import ImageLoader from '@app/components/ImageLoader';

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
    // this.onClickWidth();
  };

  onClick = () => {
    Animated.timing(this.state.counter, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    }).start();
  };

  setWidthAndHeight = event => {
    if (!this.state.onPress) {
      const { width, height } = event.nativeEvent.layout;
      this.setState({ width, height });
    }
  };

  render() {
    const { rentButtonStyle, disabled } = this.props;
    const width = this.state.counter.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.width, this.state.height]
    });
    return (
      <TouchableOpacity
        onPress={this.onPress}
        disabled={disabled}
        onLayout={event => this.setWidthAndHeight(event)}
      >
        <Animated.View
          style={[
            styles.genericStyleButton,
            rentButtonStyle,
            {
              width
            }
          ]}
        >
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
