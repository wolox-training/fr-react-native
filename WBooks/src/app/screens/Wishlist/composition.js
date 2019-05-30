import { compose } from 'recompose';
import Carousel from 'react-native-snap-carousel';
import { highOrderComponent, isEmptyConditionFn } from '@app/utils/composeComponent';

import IsEmptyWishlist from './components/IsEmptyWishlist';

const withConditionalRenderings = compose(highOrderComponent(isEmptyConditionFn, IsEmptyWishlist));

const WishlistComposed = withConditionalRenderings(Carousel);

export default WishlistComposed;
