import { StyleSheet } from 'react-native';

import { darkGray, dark } from '../../../../../../../constants/colors';

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    padding: 15
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 22
  },
  infoContainer: {
    flexDirection: 'column',
    marginLeft: 20
  },
  userText: {
    color: dark,
    fontSize: 15,
    fontWeight: 'bold'
  },
  commentText: {
    color: darkGray,
    fontSize: 15
  },
  textCommentContainer: {
    marginTop: 10,
    paddingRight: 50
  }
});

export default styles;
