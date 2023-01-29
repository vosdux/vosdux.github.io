import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Modal, Popover, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { LockOutlined, UserOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { authStore } from '@stores/authStore';
import { formItemLayout, tailFormItemLayout } from '@constants/formLayout';
import { CustomParticles } from '@components/CustomParticles';
import {
  root,
  container__login,
  register__input,
  login__block,
  register__checkbox,
  register__btn,
  icon,
} from './styles';

const { Text } = Typography;

const SignUp: React.FC = () => {
  const { singnUp, isLoading } = authStore;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const onFinish = async (values) => {
    try {
      await singnUp({ email: values.email, password: values.password, secondPassword: values.confirm });
      navigate('/dashboard');
    } catch (error) {}
  };

  return (
    <>
      <CustomParticles />
      <div className={root}>
        <div className={container__login}>
          <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} className={login__block}>
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
            <Popover
              placement="top"
              content={
                <div style={{ width: '300px' }}>
                  <InfoCircleTwoTone twoToneColor="orange" className={icon} />
                  <Text>
                    Пароль должен содержать цифры, латинские буквы верхнего и нижнего регистра и содержать не менее 8
                    символов
                  </Text>
                </div>
              }
            >
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите ваш пароль!',
                  },
                  {
                    min: 8,
                    message: 'Слишком короткий пароль!',
                  },
                  {
                    pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'),
                    message: 'Пароль не надежен!',
                  },
                  {
                    max: 32,
                    message: 'Превышен лимит!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Пароль"
                  className={register__input}
                  autoComplete="new-password"
                />
              </Form.Item>
            </Popover>

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
                    return Promise.reject(new Error('Пароли не совпадают!'));
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
                Я прочитал <a onClick={toggleModal}>соглашение</a>
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
        <Modal open={isModalVisible} onCancel={toggleModal} onOk={toggleModal} okText="Ок" cancelText="Отменить" title="Cолгашение">
          <Text>Здесь будет текст соглашения</Text>
        </Modal>
      </div>
    </>
  );
};

export default observer(SignUp);
