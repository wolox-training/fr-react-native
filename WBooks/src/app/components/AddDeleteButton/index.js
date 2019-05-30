import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ADD, REMOVE } from './constants/texts';
import styles from './styles';
import { isTimeToAdd } from './utils/isTimeToAdd';

function AddDeleteButton({ handleRemoveBook, handleAddBook, timeToAdd, styleContainer }) {
  const text = isTimeToAdd(
    timeToAdd,
    <Text style={[styles.buttonAndAvailableDesign, styles.wishlistText]}>{ADD}</Text>,
    <Text style={styles.removeText}>{REMOVE}</Text>
  );
  const touchableOpacityStyle = isTimeToAdd(timeToAdd, styles.wishlistButton, styles.removeButton);
  const onPress = isTimeToAdd(timeToAdd, handleAddBook, handleRemoveBook);
  const touchableOpacity = (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.genericStyleButton, touchableOpacityStyle, styleContainer]}
    >
      {text}
    </TouchableOpacity>
  );

  return <Fragment>{touchableOpacity}</Fragment>;
}

export default AddDeleteButton;
