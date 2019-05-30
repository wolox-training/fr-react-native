import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { ROUTES } from '@constants/routes';
import { navigationProptype } from '@propTypes/navigation';
import { connect } from 'react-redux';
import { getBookSelector } from '@app/utils/selector';

import BookLayout from './layout';

class Book extends Component {
  handlePress = () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { book } = this.props;
    navigate(ROUTES.BookDetail, { book });
  };

  render() {
    const {
      book: {
        image: { url: image },
        title,
        author
      }
    } = this.props;
    return <BookLayout title={title} image={image} author={author} handlePress={this.handlePress} />;
  }
}

const mapStateToProps = (state, props) => ({ book: getBookSelector(state, props) });

Book.propTypes = {
  id: PropTypes.number.isRequired,
  navigation: navigationProptype.isRequired
};

export default connect(mapStateToProps)(withNavigation(Book));
