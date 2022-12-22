import { Button } from 'antd'; 
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { authStore } from '@stores/authStore';
import { root } from './styles';

const LandingPage = () => {
  const { login } = authStore;
  const navigate = useNavigate();

  useEffect(() => {
    login({ login: '', password: '' });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={root}>
    <Button onClick={() => navigate('sign-up')} >sign up</Button>
    <Button className={root} onClick={() => navigate('login')} >login</Button>
  </div>;
};

export default observer(LandingPage);
