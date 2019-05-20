import { EMPTY_PASSWORD, SHORT_PASSWORD } from '../texts';

import Success from './monad/Success';
import Error from './monad/Error';
import { validateValidations } from './utils';

const moreThanFiveLength = password =>
  password.length > 5 ? new Success(password) : new Error(SHORT_PASSWORD);

const emptyPassword = password => (password ? new Success(password) : new Error(EMPTY_PASSWORD));

export const passwordValidations = [emptyPassword, moreThanFiveLength];

export const validatePassword = password => validateValidations(password, passwordValidations);
