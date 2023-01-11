import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { CustomParticles } from '@components/CustomParticles';
import { formItemLayout, tailFormItemLayout } from '@constants/formLayout';
import {
  root,
  container__сhangePassword,
  сhangePassword__input,
  сhangePassword__block,
  сhangePassword__btn,
} from './styles';

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <CustomParticles />
      <div className={root}>
        <div className={container__сhangePassword}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
            }}
            scrollToFirstError
            className={сhangePassword__block}
          >
            <h3>Введите новый пароль</h3>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите ваш пароль!',
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Пароль"
                className={сhangePassword__input}
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, подтвердите свой пароль!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Введенный вами пароли не совпадают!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Подтвердите пароль"
                className={сhangePassword__input}
              />
            </Form.Item>
            <Form.Item {...tailFormItemLayout} className={сhangePassword__btn}>
              <Button type="primary" htmlType="submit">
                Изменить пороль
              </Button>
              <Button type="primary" onClick={() => navigate('/login')}>
                Назад
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
