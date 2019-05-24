import React from 'react';
import { compose } from 'recompose';

import BookListLayout from '../Library/components/BookList/layout';

import IsEmptyList from './components/IsEmptyList';

const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props =>
  conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;

const isEmptyConditionFn = ({ text }) => !text;
//const isEmptyConditionFn = ({ data }) => true;

const withConditionalRenderings = compose(highOrderComponent(isEmptyConditionFn, IsEmptyList));

const SearchComposed = withConditionalRenderings(BookListLayout);

export default SearchComposed;
