import { StyleSheet } from 'react-native';

import { HEIGHT_ICON, WIDTH_ICON } from '../constants/sizes';

export const stylesGenericOptions = StyleSheet.create({
  imageBack: {
    height: HEIGHT_ICON,
    width: WIDTH_ICON,
    marginLeft: 15
  }
});

export const stylesLibraryHeader = StyleSheet.create({
  bellIcon: {
    marginLeft: 15
  },
  searchIcon: {
    marginRight: 15
  }
});
