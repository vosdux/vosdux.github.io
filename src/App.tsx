import React, { Suspense } from 'react';
import { AppRoute } from './Route';
import {globals} from './styles';

export const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={globals}></div>
      <AppRoute />
    </Suspense>
  );
};
