import React, { Suspense } from 'react';
import { AppRoute } from './Route';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoute />
    </Suspense>
  );
};
