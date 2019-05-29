import { StyleSheet } from 'react-native';
import { lightGray, red, blue } from '@constants/colors';
import { COMMON_TEXT } from '@constants/sizes'

const styles = StyleSheet.create({
  removeText: {
    color: lightGray,
    fontSize: 14,
    fontWeight: 'bold'
  },
  buttonAndAvailableDesign: {
    fontSize: COMMON_TEXT,
    fontWeight: 'bold'
  },
  genericStyleButton: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25
  },
  wishlistButton: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: blue,
    marginBottom: 10,
    color: blue
  },
  removeButton: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: red,
    marginBottom: 10,
    backgroundColor: red
  },
  wishlistText: {
    color: blue
  }
});

export default styles;
