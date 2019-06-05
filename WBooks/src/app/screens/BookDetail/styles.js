import { StyleSheet } from 'react-native';
import { lightBlue, white } from '@constants/colors';

const styles = StyleSheet.create({
  bookDetailContainer: {
    backgroundColor: lightBlue,
    paddingTop: 25,
    flex: 1
  },
  detailBoxContainer: {
    backgroundColor: white,
    marginBottom: 15
  },
  commentBoxContainer: {
    backgroundColor: white
  }
});

export default styles;
