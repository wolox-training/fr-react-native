import React from 'react';
import { ImageBackground, TextInput, Text, View } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

function LoginLayout() {
  return (
    <ImageBackground style={styles.loginContainer} source={backgroundImage}>
      <TextInput style={[styles.textInput, styles.container]} placeholder="Usuario" textAlign="center" />
      <TextInput style={[styles.textInput, styles.container]} placeholder="Password" textAlign="center" />
      <TouchableOpacity style={[styles.buttonContainer, styles.container]}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default LoginLayout;
