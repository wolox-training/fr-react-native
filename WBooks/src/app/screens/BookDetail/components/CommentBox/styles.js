import { StyleSheet } from 'react-native';

import { linkBlue } from '../../../../../constants/colors';

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
    fontSize: 15
  }
});

export default styles;
