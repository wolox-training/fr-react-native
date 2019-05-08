import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import { ROUTES } from '../../../../../constants/routes';
import { navigationProptype } from '../../../../../propTypes/navigation';
import { getBookById } from '../../../../../utils/book';
import ImageBook from '../../../../components/ImageBook';

import styles from './styles';

class Book extends Component {
  state = {
    book: { image_url: '', title: '', author: '' }
  };

  componentDidMount() {
    const { id } = this.props;
    this.setState({ book: getBookById(id) });
  }

  handlePress = () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { book } = this.state;
    navigate(ROUTES.BookDetail, { book });
  };

  render() {
    const {
      book: { image_url: image, title, author }
    } = this.state;
    return (
      <TouchableOpacity style={styles.bookContainer} onPress={this.handlePress}>
        <View style={styles.bookImage}>
          <ImageBook style={styles.image} source={image} />
        </View>
        <View style={styles.titleAndAuthor}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  navigation: navigationProptype.isRequired
};

export default withNavigation(Book);
