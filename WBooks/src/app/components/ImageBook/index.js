import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import imageNoExists from '../../../assets/general/no_book_question.jpg';

function ImageBook({ style, source }) {
  const imageSource = source ? { uri: source } : imageNoExists;
  return <Image style={style} source={imageSource} />;
}

ImageBook.propTypes = {
  style: PropTypes.shape({}),
  source: PropTypes.string
};

export default ImageBook;
