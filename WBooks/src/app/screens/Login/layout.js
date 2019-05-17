import React from 'react';
import { ImageBackground, TextInput, Text } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { USER_PLACE_HOLDER, PASSWORD_PLACE_HOLDER, LOG_IN } from './constants/texts';
import styles from './styles';

function LoginLayout({ updateUser, updatePassword, logInSuccessful }) {
  return (
    <ImageBackground style={styles.loginContainer} source={backgroundImage}>
      <TextInput
        style={[styles.textInput, styles.container]}
        placeholder={USER_PLACE_HOLDER}
        autoCapitalize="none"
        textAlign="center"
        onChangeText={text => updateUser(text)}
      />
      <TextInput
        style={[styles.textInput, styles.container]}
        placeholder={PASSWORD_PLACE_HOLDER}
        autoCapitalize="none"
        secureTextEntry
        textAlign="center"
        onChangeText={text => updatePassword(text)}
      />
      <TouchableOpacity style={[styles.buttonContainer, styles.container]} onPress={logInSuccessful}>
        <Text style={styles.buttonText}>{LOG_IN}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default LoginLayout;
