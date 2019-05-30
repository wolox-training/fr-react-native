import { compose } from 'recompose';
import Loading from '@app/components/Loading';
import {
  highOrderComponent,
  isLoadingConditionFn,
  errorCondition,
  isEmptyConditionFn
} from '@app/utils/composeComponent';

import Error from './components/Error';
import IsEmptyList from './components/IsEmptyList';
import BookListLayout from './layout';

const withConditionalRenderings = compose(
  highOrderComponent(isLoadingConditionFn, Loading),
  highOrderComponent(errorCondition, Error),
  highOrderComponent(isEmptyConditionFn, IsEmptyList)
);

const BookListCompose = withConditionalRenderings(BookListLayout);

export default BookListCompose;
