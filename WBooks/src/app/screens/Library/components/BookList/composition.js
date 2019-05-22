import React from 'react';
import { compose } from 'recompose';
import Loading from '@app/components/Loading';

import Error from './components/Error';
import IsEmptyList from './components/IsEmptyList';

const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props =>
  conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;

const isLoadingConditionFn = props => props.isLoading;
const errorCondition = props => Object.values(props.error).length;
const isEmptyConditionFn = props => !props.books.length || !props.books;

const withConditionalRenderings = compose(
  highOrderComponent(isLoadingConditionFn, Loading),
  highOrderComponent(errorCondition, Error),
  highOrderComponent(isEmptyConditionFn, IsEmptyList)
);

export const composeConditionalRenders = Component => withConditionalRenderings(Component);
