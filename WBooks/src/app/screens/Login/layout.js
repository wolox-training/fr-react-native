import React from 'react';
import { ImageBackground, TextInput, Text, View, TouchableOpacity } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';

import { USER_PLACE_HOLDER, PASSWORD_PLACE_HOLDER, LOG_IN } from './constants/texts';
import styles from './styles';

function LoginLayout({ updateUser, updatePassword, logInSuccessful, errorMessage }) {
  return (
    <ImageBackground style={styles.loginContainer} source={backgroundImage}>
      <View style={styles.flexRow}>
        <TextInput
          style={[styles.textInput, styles.container]}
          placeholder={USER_PLACE_HOLDER}
          autoCapitalize="none"
          textAlign="center"
          onChangeText={text => updateUser(text)}
        />
      </View>
      <View style={styles.flexRow}>
        <TextInput
          style={[styles.textInput, styles.container]}
          placeholder={PASSWORD_PLACE_HOLDER}
          autoCapitalize="none"
          secureTextEntry
          textAlign="center"
          onChangeText={text => updatePassword(text)}
        />
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity style={[styles.buttonContainer, styles.container]} onPress={logInSuccessful}>
          <Text style={styles.buttonText}>{LOG_IN}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{errorMessage}</Text>
      </View>
    </ImageBackground>
  );
}

export default LoginLayout;
