import React, { Component } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { dark } from '@constants/colors';

class MyStatusBar extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: dark }}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={dark}
          translucent={false}
          networkActivityIndicatorVisible
        />
        {this.props.children}
      </SafeAreaView>
    );
  }
}

export default MyStatusBar;
