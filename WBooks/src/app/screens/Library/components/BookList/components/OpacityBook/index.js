import React, { Component } from 'react';
import { Animated } from 'react-native';

class OpacityBook extends Component {
  state = {
    scaleValue: new Animated.Value(0)
  };

  componentDidMount() {
    const { index } = this.props;
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 600,
      delay: index * 350
    }).start();
  }

  render() {
    const { scaleValue } = this.state;
    const { children } = this.props;
    return <Animated.View style={{ opacity: scaleValue }}>{children}</Animated.View>;
  }
}

export default OpacityBook;
