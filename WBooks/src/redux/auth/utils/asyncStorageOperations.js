import { AsyncStorage } from 'react-native';
import { KEYS } from '@constants/asyncStorageKeys';

export const asyncStorageOperations = {
  getAccessToken: async () => AsyncStorage.getItem(KEYS.ACCESS_TOKEN),
  getClient: async () => AsyncStorage.getItem(KEYS.CLIENT),
  getUserId: async () => AsyncStorage.getItem(KEYS.USER_ID)
};
