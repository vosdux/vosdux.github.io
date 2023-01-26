import React from 'react';
import { Spin } from 'antd';
import { root } from './styles';

export const LoadingScreen = () => (
  <div className={root}>
    <Spin size="large" />
  </div>
);
