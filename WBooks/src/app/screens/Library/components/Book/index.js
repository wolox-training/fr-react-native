import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { ROUTES } from '@constants/routes';
import { navigationProptype } from '@propTypes/navigation';
import { getBookById } from '@utils/book';

import BookLayout from './layout';

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
    return <BookLayout title={title} image={image} author={author} handlePress={this.handlePress} />;
  }
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  navigation: navigationProptype.isRequired
};

export default withNavigation(Book);
