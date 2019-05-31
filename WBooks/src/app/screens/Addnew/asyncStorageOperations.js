import { AsyncStorage } from 'react-native';
import { KEYS } from '@constants/asyncStorageKeys';

export const asyncStorageOperations = {
  removeAccessToken: () => AsyncStorage.setItem(KEYS.ACCESS_TOKEN, ''),
  removeClient: () => AsyncStorage.setItem(KEYS.CLIENT, ''),
  removeUserId: () => AsyncStorage.setItem(KEYS.USER_ID, '')
};
