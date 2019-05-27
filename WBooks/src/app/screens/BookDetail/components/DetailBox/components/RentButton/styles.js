import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

const styles = StyleSheet.create({
  genericStyleButton: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
    alignSelf: 'center'
  },
  textAvailable: {
    color: white
  },
  imageTick: {
    width: 25,
    height: 25
  }
});

export default styles;
