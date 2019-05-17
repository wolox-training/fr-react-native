import React from 'react';
import { ImageBackground, TextInput, Text, TouchableOpacity } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';

import { USER_PLACE_HOLDER, PASSWORD_PLACE_HOLDER, LOG_IN } from './constants/texts';
import styles from './styles';
import TextInputLogin from './components/TextInputLogin';

function LoginLayout({ updateUser, updatePassword, logInSuccessful }) {
  return (
    <ImageBackground style={styles.loginContainer} source={backgroundImage}>
      <TextInputLogin placeholder={USER_PLACE_HOLDER} onChangeText={text => updateUser(text)} />
      <TextInputLogin placeholder={PASSWORD_PLACE_HOLDER} onChangeText={text => updatePassword(text)} />
      <TouchableOpacity style={[styles.buttonContainer, styles.container]} onPress={logInSuccessful}>
        <Text style={styles.buttonText}>{LOG_IN}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default LoginLayout;
