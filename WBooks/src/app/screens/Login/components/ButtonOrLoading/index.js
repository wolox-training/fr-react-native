import React from 'react';
import Loading from '@app/components/Loading';

import LoginButton from '../LoginButton';

function ButtonOrLoading({ isLoading, logInSuccessful }) {
  return isLoading ? <Loading /> : <LoginButton logInSuccessful={logInSuccessful} />;
}

export default ButtonOrLoading;
