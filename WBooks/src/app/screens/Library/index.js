import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { ROUTES } from '../../../constants/routes';
import bellNotification from '../../../assets/navigation_bar/ic_notifications.png';

import styles from './styles';
import BookList from './components/BookList';

class Library extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookList />
      </View>
    );
  }
}

export default Library;
