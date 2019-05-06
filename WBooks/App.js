import React from 'react';

import {View} from 'react-native'

import App from './src/app';


import Book from './src/app/components/Book'

export default function index() {
  return (
    <View style={{marginTop:60}}>
      <Book/>
    </View>
      

  );
}