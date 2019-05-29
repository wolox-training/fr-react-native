import React, { Fragment } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ADD, REMOVE } from './constants/texts';
import styles from './styles';

function AddDeleteButton({ handleRemoveBook, handleAddBook, timeToAdd, styleContainer }) {
  return (
    <Fragment>
      {timeToAdd ? (
        <TouchableOpacity
          onPress={handleAddBook}
          style={[styles.genericStyleButton, styles.wishlistButton, styleContainer]}
        >
          <Text style={[styles.buttonAndAvailableDesign, styles.wishlistText]}>{ADD}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.genericStyleButton, styles.removeButton, styleContainer]}
          onPress={handleRemoveBook}
        >
          <Text style={styles.removeText}>{REMOVE}</Text>
        </TouchableOpacity>
      )}
    </Fragment>
  );
}

export default AddDeleteButton;
