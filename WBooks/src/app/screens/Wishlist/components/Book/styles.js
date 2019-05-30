import { StyleSheet } from 'react-native';
import { veryBlue, lightGray } from '@constants/colors';

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
    borderRadius: 10,
    flex: 1
  },
  imageContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flex: 8
  },
  image: {
    flex: 1
  },
  textContainer: {
    marginBottom: 10,
    flex: 0.5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  removeContainer: {
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
