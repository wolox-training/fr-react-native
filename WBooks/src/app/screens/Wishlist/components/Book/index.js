import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '@redux/wishlist/actions';
import { getBookSelector } from '@app/utils/selector';

import BookLayout from './layout';

class Book extends Component {
  handleRemoveBook = () => {
    const { removeFromWishlist, id } = this.props;
    removeFromWishlist(id);
  };

  render() {
    const {
      book: {
        image: { url: image },
        title
      }
    } = this.props;
    return <BookLayout title={title} image={image} handleRemoveBook={this.handleRemoveBook} />;
  }
}

const mapStateToProps = (state, props) => ({ book: getBookSelector(state, props) });

const mapDispatchToProps = dispatch => ({
  removeFromWishlist: id => dispatch(actionCreators.delete(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
