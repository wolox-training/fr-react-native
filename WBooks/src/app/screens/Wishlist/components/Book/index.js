import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookLayout from './layout';

class Book extends Component {
  handleRemoveBook = () => {};

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

const mapStateToProps = (state, props) => ({ book: state.books.books.find(book => book.id === props.id) });

export default connect(mapStateToProps)(Book);
