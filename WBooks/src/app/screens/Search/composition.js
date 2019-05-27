import React from 'react';
import { compose } from 'recompose';

import BookListLayout from '../Library/components/BookList/layout';

import IsEmptyInputText from './components/IsEmptyInputText';
import IsEmptyBookList from './components/IsEmptyBookList';

const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props =>
  conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;

const isEmptyCondition = ({ data }) => !data.length || !data;
const thereIsNoText = ({ text }) => !text;

const withConditionalRenderings = compose(
  highOrderComponent(thereIsNoText, IsEmptyInputText),
  highOrderComponent(isEmptyCondition, IsEmptyBookList)
);

const SearchComposed = withConditionalRenderings(BookListLayout);

export default SearchComposed;
