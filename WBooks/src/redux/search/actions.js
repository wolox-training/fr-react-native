import { actionTypes } from './constants/actionTypes';

export const actionCreators = {
  write: text => ({
    type: actionTypes.WRITE,
    payload: text
  })
};
