import { StyleSheet } from 'react-native';

import { white, darkGray, red, green, blue, lightGray, veryBlue } from '../../../../../constants/colors';

import { COMUNTEXT } from '../../../../../constants/sizes';

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: white
  },
  detailContainer: {
    flexDirection: 'row'
  },
  image: {
    height: 110,
    width: 70
  },
  infoContainer: {
    flexDirection: 'column',
    marginLeft: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: darkGray
  },
  buttonAndAvailableDesign: {
    fontSize: COMUNTEXT,
    fontWeight: 'bold'
  },
  available: {
    color: green
  },
  notAvailable: {
    color: red
  },
  textInfo: {
    color: darkGray,
    fontSize: COMUNTEXT
  },
  buttonsContainer: {
    marginTop: 15
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
  wishlistText: {
    color: blue
  },
  rentButtonAvailable: {
    backgroundColor: veryBlue
  },
  rentButtonNotAvailable: {
    backgroundColor: lightGray
  },
  textAvailable: {
    color: white
  }
});

export default styles;
