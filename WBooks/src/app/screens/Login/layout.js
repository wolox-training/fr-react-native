import React, { Fragment } from 'react';
import { ImageBackground, TextInput, Text, View, TouchableOpacity } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';

import { USER_PLACE_HOLDER, PASSWORD_PLACE_HOLDER, LOG_IN } from './constants/texts';
import styles from './styles';

const COMMON_PROPS = {
  autoCapitalize: 'none',
  textAlign: 'center',
  style: [styles.textInput, styles.container]
};

function LoginLayout({ updateUser, updatePassword, logInSuccessful, errorMessage }) {
  return (
    <ImageBackground style={styles.loginContainer} source={backgroundImage}>
      <View style={styles.flexRow}>
        <TextInput
          placeholder={USER_PLACE_HOLDER}
          onChangeText={text => updateUser(text)}
          {...COMMON_PROPS}
        />
      </View>
      <View style={styles.flexRow}>
        <TextInput
          placeholder={PASSWORD_PLACE_HOLDER}
          secureTextEntry
          onChangeText={text => updatePassword(text)}
          {...COMMON_PROPS}
        />
      </View>
      <View style={[styles.flexRow, styles.marginBottom]}>
        <TouchableOpacity style={[styles.buttonContainer, styles.container]} onPress={logInSuccessful}>
          <Text style={styles.buttonText}>{LOG_IN}</Text>
        </TouchableOpacity>
      </View>
      <Fragment>
        <Text style={styles.textError}>{errorMessage}</Text>
      </Fragment>
    </ImageBackground>
  );
}

export default LoginLayout;
