import { genericBook } from '@constants/mocks';

export const isAvailable = (ifIsAvailable, ifIsNotAvailable) =>
  genericBook.isAvailable ? ifIsAvailable : ifIsNotAvailable;
