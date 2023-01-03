import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  root,
  container__passwordRequest,
  passwordRequest__block,
  passwordRequest__btn,
  passwordRequest__input,
} from './styles';
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
      <div className={container__passwordRequest}>
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
          className={passwordRequest__block}
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
            <Input className={passwordRequest__input} prefix={<UserOutlined />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item {...tailFormItemLayout} className={passwordRequest__btn}>
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
