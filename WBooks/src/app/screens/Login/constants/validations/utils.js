import Success from './monad/Success';

const applyFunction = (monad, validation) => monad.map(validation);

export const validateValidations = (something, validations) => {
  const monad = new Success(something);
  return validations.reduce(applyFunction, monad);
};
