import React from 'react';

export const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props =>
  conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;

export const isLoadingConditionFn = ({ isLoading }) => isLoading;
export const errorCondition = ({ error }) => error && Object.values(error).length;
export const isEmptyConditionFn = ({ data }) => !data.length || !data;
