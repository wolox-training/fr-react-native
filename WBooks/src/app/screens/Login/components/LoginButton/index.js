import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from '../../styles';
import { LOG_IN } from '../../constants/texts';

function LoginButton({ logInSuccessful }) {
  return (
    <View style={styles.flexRow}>
      <TouchableOpacity style={[styles.buttonContainer, styles.container]} onPress={logInSuccessful}>
        <Text style={styles.buttonText}>{LOG_IN}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginButton;
