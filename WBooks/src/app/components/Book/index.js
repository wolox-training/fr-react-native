import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
function Book({image,title,author}){
        console.log(title,image,author);
      return (
        <View style={styles.bookContainer}>
            <View style={styles.bookImage}>
                <Image
                    style={{width: 40, height: 60}}
                    source={{uri: image}}
                />
            </View>
            <View style={styles.titleAndAuthor}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.authorContainer}>
                    <Text style={styles.author}>{author}</Text>
                </View>
            </View>
        </View>
      );
  }

  Book.propTypes = {
    title: PropTypes.string,
    author:PropTypes.string,
    image:PropTypes.string
  };
  
  export default Book;