import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Form, Input } from 'antd';
import { authStore } from '@stores/authStore';
import { UserOutlined } from '@ant-design/icons';
import { CustomParticles } from '@components/CustomParticles';
import { formItemLayout, tailFormItemLayout } from '@constants/formLayout';
import {
  root,
  container__passwordRequest,
  passwordRequest__block,
  passwordRequest__btn,
  passwordRequest__input,
} from './styles';

const PasswordRequest: React.FC = () => {
  const { changePasswordRequest, isLoading } = authStore;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    changePasswordRequest({ email: values.email });
  };

  return (
    <>
      <CustomParticles />
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
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Далее
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default observer(PasswordRequest);
