import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { CustomParticles } from '@components/CustomParticles';
import { authStore } from '@stores/authStore';
import { root, container__login, login__btn, login__block } from './styles';

const LoginPage: React.FC = () => {
  const { login, isLoading } = authStore;
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await login({ username: values.username, password: values.password });
      navigate('/dashboard');
    } catch (error) {}
  };

  const emailValidator = async (_: unknown, email: string) => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (regex.test(email)) {
      return Promise.resolve();
    } else {
      return Promise.reject('Неверный формат Email');
    }
  };

  return (
    <>
      <CustomParticles />
      <div className={root}>
        <div className={container__login}>
          <Form name="normal_login" className={login__block} initialValues={{ remember: true }} onFinish={onFinish}>
            <h2>Авторизация</h2>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Пожалуйста, введите ваш e-mail!' },
                { validator: emailValidator, validateTrigger: 'submit' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="E-mail" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Пожалуйста, введите Ваш пароль!' }]}>
              <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>

              <a type="link" onClick={() => navigate('/change-password-request')}>Забыли пароль</a>
            </Form.Item>

            <Form.Item className={login__btn}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Войти
              </Button>
              Или <a onClick={() => navigate('/sign-up')}>зарегистрируйтесь прямо сейчас!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default observer(LoginPage);
