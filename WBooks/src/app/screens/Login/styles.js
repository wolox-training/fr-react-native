import { StyleSheet } from 'react-native';
import { white, darkGray, veryBlue } from '@constants/colors';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: white,
    borderColor: darkGray,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10
  },
  container: {
    height: 42,
    width: 330
  },
  buttonContainer: {
    backgroundColor: veryBlue,
    borderColor: darkGray,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: white,
    fontWeight: 'bold'
  }
});

export default styles;
