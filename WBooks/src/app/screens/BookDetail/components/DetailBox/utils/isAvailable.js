import { genericBook } from '../constants/genericBook';

export const isAvailable = (ifIsAvailable, ifIsNotAvailable) => {
  return genericBook.isAvailable ? ifIsAvailable : ifIsNotAvailable;
};
