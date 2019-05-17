import React from 'react';
import { TextInput } from 'react-native';

import styles from '../styles';

function TextInputLogin({ placeholder, onChangeText }) {
  return (
    <TextInput
      style={[styles.textInput, styles.container]}
      placeholder={placeholder}
      textAlign="center"
      onChangeText={onChangeText}
    />
  );
}

export default TextInputLogin;
