import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { authStore } from '@stores/authStore';
import { root, container__login, register__input, login__block, register__checkbox, register__btn } from './styles';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUp: React.FC = () => {
  const { singnUp, isLoading } = authStore;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    singnUp({ email: values.email, password: values.password, secondPassword: values.confirm });
  };

  return (
    <div className={root}>
      <div className={container__login}>
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
          className={login__block}
        >
          <h2>Регистрация</h2>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Введен неверный E-mail!',
              },
              {
                required: true,
                message: 'Пожалуйста, введите свой E-mail!',
              },
            ]}
          >
            <Input className={register__input} prefix={<UserOutlined />} placeholder="E-mail" />
          </Form.Item>

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
              className={register__input}
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
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Подтвердите пароль"
              className={register__input}
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            className={register__checkbox}
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Следует принять соглашение')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Я прочитал <a href="">соглашение</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className={register__btn}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Зарегистрироваться
            </Button>
            Или <a onClick={() => navigate('/login')}>Уже существует аккаунт?</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
