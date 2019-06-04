import { emailRegEx } from './regEx';
import { EMPTY_EMAIL, INVALID_EMAIL, EMPTY_PASSWORD, SHORT_PASSWORD } from './texts';

export const validEmail = email => (emailRegEx.test(email) ? undefined : INVALID_EMAIL);
export const emptyEmail = email => (email ? undefined : EMPTY_EMAIL);
export const moreThanFiveLength = password => (password.length > 5 ? undefined : SHORT_PASSWORD);
export const emptyPassword = password => (password ? undefined : EMPTY_PASSWORD);
