import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { root, container__login, login__block, login__btn, register__input } from './styles';
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
const PasswordRequest: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
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
          <h3>Ваш адрес электронной почты</h3>
          <p>Укажите ваш адрес электронной почты</p>
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
          <Form.Item {...tailFormItemLayout} className={login__btn}>
            <Button type="primary" htmlType="submit">
              Далее
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PasswordRequest;
