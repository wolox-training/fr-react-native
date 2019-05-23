import React from 'react';
import { compose } from 'recompose';
import Loading from '@app/components/Loading';

import Error from './components/Error';
import IsEmptyList from './components/IsEmptyList';
import BookListLayout from './layout';

const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props => {
  return conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;
};

const isLoadingConditionFn = ({ isLoading }) => isLoading;
const errorCondition = ({error}) => error && Object.values(error).length;
const isEmptyConditionFn = ({data}) => !data.length || !data;

const withConditionalRenderings = compose(
  highOrderComponent(isLoadingConditionFn, Loading),
  highOrderComponent(errorCondition, Error),
  highOrderComponent(isEmptyConditionFn, IsEmptyList)
);

const BookListCompose = withConditionalRenderings(BookListLayout);

export default BookListCompose;
