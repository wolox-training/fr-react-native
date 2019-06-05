import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { dark } from '@constants/colors';

class MyStatusBar extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: dark }} forceInset={{ bottom: 'never' }}>
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
