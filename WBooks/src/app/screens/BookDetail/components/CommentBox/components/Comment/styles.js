import { StyleSheet } from 'react-native';

import { darkGray, dark } from '../../../../../../../constants/colors';

import { COMUNTEXT } from '../../../../../../../constants/sizes';

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
    fontSize: COMUNTEXT,
    fontWeight: 'bold'
  },
  commentText: {
    color: darkGray,
    fontSize: COMUNTEXT
  },
  textCommentContainer: {
    marginTop: 10,
    paddingRight: 50
  }
});

export default styles;
