import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from '../../styles';

const COMMON_PROPS = {
  autoCapitalize: 'none',
  textAlign: 'center',
  style: [styles.textInput, styles.container]
};

const InputComponent = ({
  input: { ...restInput },
  meta: { error, submitFailed },
  secureTextEntry,
  label,
  onChange
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.flexRow}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          {...restInput}
          {...COMMON_PROPS}
          placeholder={label}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <View style={styles.textErrorContainer}>
        {error && submitFailed && <Text style={styles.textError}>{error}</Text>}
      </View>
    </View>
  );
};

export default InputComponent;
