import { StyleSheet } from 'react-native';
import { dark, darkGray } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: dark
  },
  message: {
    fontSize: 15,
    color: darkGray
  }
});

export default styles;
