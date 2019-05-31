import React, { Fragment } from 'react';
import MyStatusBar from '@app/components/MyStatusBar';

import MyApp from './src/app';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function index() {
  return (
    <Fragment>
      <MyStatusBar>
        <MyApp />
      </MyStatusBar>
    </Fragment>
  );
}
