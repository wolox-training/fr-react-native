import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function IsEmptyInputText() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>There is no books with that name</Text>
      </View>
    </View>
  );
}

export default IsEmptyInputText;
