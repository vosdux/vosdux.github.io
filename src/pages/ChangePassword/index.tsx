import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { authStore } from '@stores/authStore';
import { LockOutlined } from '@ant-design/icons';
import { formItemLayout, tailFormItemLayout } from '@constants/formLayout';
import {
  root,
  container__сhangePassword,
  сhangePassword__input,
  сhangePassword__block,
  сhangePassword__btn,
} from './styles';

const ChangePassword: React.FC = () => {
  const { changePassword, isLoading } = authStore;
  const param = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await changePassword({ password: values.password, secondPassword: values.confirm, chnageLink: param.link }, () =>
      navigate('/login')
    );
  };

  return (
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
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Изменить пороль
            </Button>
            <Button type="primary" onClick={() => navigate('/login')}>
              Назад
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default observer(ChangePassword);
