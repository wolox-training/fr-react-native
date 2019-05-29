import React from 'react';
import { compose } from 'recompose';
import Carousel from 'react-native-snap-carousel';

import IsEmptyWishlist from './components/IsEmptyWishlist';

const highOrderComponent = (conditionalRenderingFn, EitherComponent) => Component => props =>
  conditionalRenderingFn(props) ? <EitherComponent /> : <Component {...props} />;

const isEmptyCondition = ({ data }) => !data.length || !data;

const withConditionalRenderings = compose(highOrderComponent(isEmptyCondition, IsEmptyWishlist));

const WishlistComposed = withConditionalRenderings(Carousel);

export default WishlistComposed;
