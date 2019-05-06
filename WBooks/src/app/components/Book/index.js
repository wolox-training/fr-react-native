import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
class Book extends Component {
    render() {
      return (
        <View style={styles.bookContainer}>
            <View style={styles.bookImage}>
                <Image
                    style={{width: 40, height: 60}}
                    source={{uri: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'}}
                />
            </View>
            <View style={styles.titleAndAuthor}>
                <View>
                    <Text style={styles.title}>Locked in time</Text>
                </View>
                <View style={styles.authorContainer}>
                    <Text style={styles.author}>Lois Duncan</Text>
                </View>
            </View>
        </View>
      );
    }
  }

  export default Book;