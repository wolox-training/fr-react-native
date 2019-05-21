import { AsyncStorage } from 'react-native';
import { KEYS } from '@constants/asyncStorageKeys';

export const asyncStorageOperations = {
  getAccessToken: () => AsyncStorage.getItem(KEYS.ACCESS_TOKEN)
};
