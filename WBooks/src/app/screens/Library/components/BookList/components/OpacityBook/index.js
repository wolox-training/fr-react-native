import React, { Component } from 'react';
import { Animated } from 'react-native';

class OpacityBook extends Component {
  state = {
    scaleValue: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 600,
      delay: this.props.index * 350
    }).start();
  }

  render() {
    return <Animated.View style={{ opacity: this.state.scaleValue }}>{this.props.children}</Animated.View>;
  }
}

export default OpacityBook;
