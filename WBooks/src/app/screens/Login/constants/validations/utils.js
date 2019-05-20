import Success from './monad/Success';

const applyFunction = (monad, validation) => monad.flatMap(validation);

export const validateValidations = (something, validations) => {
  const monad = new Success(something);
  return validations.reduce(applyFunction, monad);
};
