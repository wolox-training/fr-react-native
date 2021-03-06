import React, { Component } from 'react';
import { Animated } from 'react-native';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0)
  };

  onLoad = () =>
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();

  render() {
    const { opacity } = this.state;
    const { style } = this.props;
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity,
            transform: [
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.2, 1]
                })
              }
            ]
          },
          style
        ]}
      />
    );
  }
}

export default ImageLoader;
