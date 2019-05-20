import { emailRegEx } from '../regEx';
import { EMPTY_EMAIL, INVALID_EMAIL } from '../texts';

import Success from './monad/Success';
import Error from './monad/Error';
import { validateValidations } from './utils';

const validEmail = email => (emailRegEx.test(email) ? new Success(email) : new Error(INVALID_EMAIL));

const emptyEmail = email => (email ? new Success(email) : new Error(EMPTY_EMAIL));

const emailValidations = [emptyEmail, validEmail];

export const validateEmail = email => validateValidations(email, emailValidations);
