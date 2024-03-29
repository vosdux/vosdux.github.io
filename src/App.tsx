import { ConfigProvider } from 'antd';
import React, { Suspense, useEffect } from 'react';
import { authStore } from '@stores/authStore';
import { globals, primaryColor } from '@styles/global';
import { LoadingScreen } from '@components/LoadingScreen';
import { AppRoute } from './Route';

export const App = () => {
  const { checkAuthenticated } = authStore;

  useEffect(() => {
    checkAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <Suspense fallback={<LoadingScreen />}>
        <div className={globals}></div>
        <AppRoute />
      </Suspense>
    </ConfigProvider>
  );
};
