import Success from './monad/Success';
import Error from './monad/Error';
import { validateValidations } from './utils';

const moreThanFiveLenght = password =>
  password.length > 5
    ? new Success(password)
    : new Error('El campo password tiene que tener mas de 5 caracteres');

const emptyPassword = password =>
  password ? new Success(password) : new Error('El campo password esta vacio');

export const passwordValidations = [emptyPassword, moreThanFiveLenght];

export const validatePassword = password => validateValidations(password, passwordValidations);
