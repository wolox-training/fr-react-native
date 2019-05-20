import Success from './monad/Success';

const applyFunction = (monad, validation) => monad.flatMap(validation);

export const validateValidations = (something, validations) => {
  return validations.reduce(applyFunction, new Success(something));
};
