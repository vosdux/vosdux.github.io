import { Button } from '@components/Button';
import { Button as AntdButton } from 'antd'; 
import React from 'react';
import { useEffect } from 'react';
import { root } from './styles';
import { authStore } from '@stores/authStore';
import { observer } from 'mobx-react-lite';

const LandingPage = () => {
  const { login, isLoading } = authStore;
  console.log(isLoading, 'load');

  useEffect(() => {
    login({ login: '', password: '' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={root}>
    <Button />
    <AntdButton className={root}>antd</AntdButton>
  </div>;
};

export default observer(LandingPage);
