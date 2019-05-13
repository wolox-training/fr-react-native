import { StyleSheet } from 'react-native';

import { linkBlue } from '../../../../../constants/colors';
import { COMMON_TEXT } from '../../../../../constants/sizes';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  viewAll: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15
  },
  textViewAll: {
    color: linkBlue,
    fontSize: COMMON_TEXT
  }
});

export default styles;
