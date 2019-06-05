import React, { Fragment } from 'react';
import { ImageBackground, Text } from 'react-native';
import backgroundImage from '@assets/general/bc_inicio.png';
import { Field, reduxForm } from 'redux-form';

import InputComponent from './components/InputComponent';
import { validEmail, emptyEmail, emptyPassword, moreThanFiveLength } from './constants/reduxValidations';
import { USER_PLACE_HOLDER, PASSWORD_PLACE_HOLDER, INCORRECT_USER_AND_PASSWORD } from './constants/texts';
import styles from './styles';
import ButtonOrLoading from './components/ButtonOrLoading';

const message = errorLogIn => (Object.values(errorLogIn).length ? INCORRECT_USER_AND_PASSWORD : '');
function LoginLayout({ errorLogIn, isLoading, handleSubmit, onSubmit, onChange }) {
  return (
    <ImageBackground style={styles.loginContainer} source={backgroundImage}>
      <Field
        name="user"
        component={InputComponent}
        validate={[validEmail, emptyEmail]}
        label={USER_PLACE_HOLDER}
        onChange={onChange('user')}
      />
      <Field
        name="password"
        component={InputComponent}
        validate={[emptyPassword, moreThanFiveLength]}
        secureTextEntry
        label={PASSWORD_PLACE_HOLDER}
        onChange={onChange('password')}
      />
      <ButtonOrLoading logInSuccessful={handleSubmit(onSubmit)} isLoading={isLoading} />
      <Fragment>
        <Text style={styles.textError}>{message(errorLogIn)}</Text>
      </Fragment>
    </ImageBackground>
  );
}

export default reduxForm({
  form: 'login'
})(LoginLayout);
