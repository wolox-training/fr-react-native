import { genericBook } from '@constants/mocks';

export const isAvailable = (ifIsAvailable, ifIsNotAvailable) => {
  return genericBook.isAvailable ? ifIsAvailable : ifIsNotAvailable;
};
