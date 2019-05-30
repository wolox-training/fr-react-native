import { StyleSheet, Dimensions } from 'react-native';
import { veryBlue, lightGray, red } from '@constants/colors';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  rentButtonAvailable: {
    backgroundColor: veryBlue
  },
  rentButtonNotAvailable: {
    backgroundColor: lightGray
  },
  container: {
    flexDirection: 'column',
    padding: 10,
    margin: 10,
    backgroundColor: lightGray,
    borderRadius: 10
  },
  imageContainer: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  image: {
    height: height - 300,
    flex: 1
  },
  textContainer: {
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  removeContainer: {
    padding: 5,
    flex: 1,
    marginRight: 10
  },
  removeText: {
    color: lightGray,
    fontSize: 14,
    fontWeight: 'bold'
  },
  rentContainer: {
    flex: 1,
    marginLeft: 10
  },
  heightButtons: {
    height: 40
  }
});

export default styles;
