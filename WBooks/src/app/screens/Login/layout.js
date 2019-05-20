import React from 'react';
import { ImageBackground, TextInput, Text, View, TouchableOpacity } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';

import { USER_PLACE_HOLDER, PASSWORD_PLACE_HOLDER, LOG_IN } from './constants/texts';
import styles from './styles';
import ButtonOrLoading from './components/ButtonOrLoading';

function LoginLayout({ updateUser, updatePassword, logInSuccessful, errorMessage, isLoading }) {
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
      <ButtonOrLoading logInSuccessful={logInSuccessful} isLoading={isLoading} />
      <View>
        <Text style={styles.textError}>{errorMessage}</Text>
      </View>
    </ImageBackground>
  );
}

export default LoginLayout;
