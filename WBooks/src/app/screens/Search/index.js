import React from 'react';
import { compose } from 'recompose';

import BookList from '../Library/components/BookList';

import IsEmptyList from './components/IsEmptyList';

const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props =>
  conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;

//const isEmptyConditionFn = ({ data }) => !data.length || !data;
const isEmptyConditionFn = ({ data }) => true;

const withConditionalRenderings = compose(highOrderComponent(isEmptyConditionFn, IsEmptyList));

const Search = withConditionalRenderings(BookList);

export default Search;
