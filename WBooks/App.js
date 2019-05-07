import React from 'react';

import {View} from 'react-native'


import BookList from './src/app/components/BookList'

export default function index() {
  return (
    <View style={{marginTop:60, backgroundColor:'#00ffff',padding:30}}>
      <BookList />
    </View>
      

  );
}