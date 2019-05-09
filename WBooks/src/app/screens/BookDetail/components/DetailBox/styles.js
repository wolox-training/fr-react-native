import { StyleSheet } from 'react-native';

import { white, darkGray, red, green, blue, lightGray, veryBlue } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 15,
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
  available: {
    color: green,
    fontSize: 15,
    fontWeight: 'bold'
  },
  notAvailable: {
    color: red,
    fontSize: 15,
    fontWeight: 'bold'
  },
  author: {
    color: darkGray,
    fontSize: 15
  },
  year: {
    color: darkGray,
    fontSize: 15
  },
  type: {
    color: darkGray,
    fontSize: 15
  },
  buttonsContainer: {
    marginTop: 15
  },
  genericStyleButton: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25
  },
  genericTextButton: {
    fontSize: 15,
    fontWeight: 'bold'
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
  textNotAvailable: {
    color: white
  },
  textAvailable: {
    color: white
  }
});

export default styles;
