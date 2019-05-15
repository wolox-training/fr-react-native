import { StyleSheet } from 'react-native';
import { white, darkGray } from '@constants/colors';

const styles = StyleSheet.create({
  bookContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: white,
    borderRadius: 5
  },
  bookImage: {
    marginRight: 18
  },
  image: {
    width: 40,
    height: 60
  },
  titleAndAuthor: {
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: darkGray,
    fontSize: 17
  },
  authorContainer: {
    marginTop: 5
  },
  author: {
    fontSize: 15
  }
});

export default styles;
