import { emailRegEx } from '../regEx';

import Success from './monad/Success';
import Error from './monad/Error';
import { validateValidations } from './utils';

const validEmail = email =>
  emailRegEx.test(email) ? new Success(email) : new Error('El email no es valido');

const emptyEmail = email => (email ? new Success(email) : new Error('El campo email esta vacio'));

const emailValidations = [emptyEmail, validEmail];

export const validateEmail = email => validateValidations(email, emailValidations);
