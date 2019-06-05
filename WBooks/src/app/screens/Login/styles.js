import { StyleSheet } from 'react-native';
import { white, darkGray, veryBlue, red } from '@constants/colors';

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
    borderRadius: 10
  },
  container: {
    height: 42,
    flex: 0.8
  },
  flexRow: {
    flexDirection: 'row'
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
  },
  textError: {
    color: red
  },
  marginBottom: {
    marginBottom: 5
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  textErrorContainer: {
    marginBottom: 10
  }
});

export default styles;
