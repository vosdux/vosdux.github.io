import { ConfigProvider } from 'antd';
import React, { Suspense } from 'react';
import { globals, primaryColor } from '@styles/global';
import { AppRoute } from './Route';

export const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <div className={globals}></div>
        <AppRoute />
      </Suspense>
    </ConfigProvider>
  );
};
