import { LOGIN_TYPES } from './constants/loginTypes';

export function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
export function loginAuthSuccess(state = {}, action) {
  switch (action.type) {
    case LOGIN_TYPES.LOGIN_AUTH_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
