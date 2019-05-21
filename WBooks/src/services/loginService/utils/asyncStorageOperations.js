import { AsyncStorage } from 'react-native';
import { KEYS } from '@constants/asyncStorageKeys';

export const asyncStorageOperations = {
  setAccessToken: accessToken => AsyncStorage.setItem(KEYS.ACCESS_TOKEN, accessToken),
  setClient: client => AsyncStorage.setItem(KEYS.CLIENT, client),
  setUserId: userId => AsyncStorage.setItem(KEYS.USER_ID, userId)
};
