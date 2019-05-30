import { StyleSheet } from 'react-native';
import { white, darkGray } from '@constants/colors';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    backgroundColor: white,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: darkGray,
    flex: 0.9,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputSearch: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 0
  },
  searchIcon: {
    marginLeft: 15
  },
  closeIcon: {
    marginRight: 15
  },
  iconSize: {
    width: 15,
    height: 15
  }
});

export default styles;
