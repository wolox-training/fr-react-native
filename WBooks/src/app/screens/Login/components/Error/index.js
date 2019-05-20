import React, { Fragment } from 'react';
import { Text } from 'react-native';

import { INCORRECT_USER_AND_PASSWORD } from '../../constants/texts';

import styles from './styles';

const buildMessage = (hasErrored, emailValidation, passwordValidation) => {
  if (hasErrored) {
    return INCORRECT_USER_AND_PASSWORD;
  }
  if (!emailValidation.isSuccess()) {
    return emailValidation.get();
  }
  if (!passwordValidation.isSuccess()) {
    return passwordValidation.get();
  }
  return '';
};
function Error({ hasErrored, emailValidation, passwordValidation }) {
  return (
    <Fragment>
      <Text style={styles.textError}>{buildMessage(hasErrored, emailValidation, passwordValidation)}</Text>
    </Fragment>
  );
}

export default Error;
