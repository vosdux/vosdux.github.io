import React, { useState } from 'react';
import cn from 'classnames';
import { Avatar, Button, Form, Input, DatePicker } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { UserOutlined, DownloadOutlined } from '@ant-design/icons';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import {
  course__wrapper,
  course__wrapper_user,
  course__wrapper_img,
  course__wrapper_data,
  course__form_input,
} from './styles';

// type Props = {}

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const UserPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Content>
      <div className={course__wrapper}>
        <div className={course__wrapper_user}>
          <Avatar icon={<UserOutlined />} size={134} alt={'avatar'} />
          <div className={course__wrapper_img}>
            <div>
              <span>Фото: </span>
              <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
                Download
              </Button>{' '}
              Добавить фото
            </div>
            <Form.Item label="E-mail">
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className={course__wrapper_data}>
          <div>
            <h3>Общие настройки профиля</h3>
            <Form
              onFinish={onFinish}
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
              form={form}
              layout="horizontal"
              style={{ maxWidth: 700 }}
            >
              <Form.Item labelAlign="left" label="Логин" className={course__form_input}>
                <Input />
              </Form.Item>
              <Form.Item labelAlign="left" label="Имя" className={course__form_input}>
                <Input />
              </Form.Item>
              <Form.Item labelAlign="left" label="Фамилия" className={course__form_input}>
                <Input />
              </Form.Item>
              <Form.Item labelAlign="left" label="Страна" className={course__form_input}>
                <Input />
              </Form.Item>
              <Form.Item labelAlign="left" label="Город" className={course__form_input}>
                <Input />
              </Form.Item>

              <Form.Item labelAlign="left" label="Напиши о себе" className={course__form_input}>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item labelAlign="left" label="Button" className={course__form_input}>
                <Button type="primary" htmlType="submit">
                  Button
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div>
            <h3>Соц. Сети</h3>
            <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }} layout="horizontal" style={{ maxWidth: 700 }}>
              <Form.Item label="Instagram" className={course__form_input}>
                <Input />
              </Form.Item>
              <Form.Item label="Telegram" className={course__form_input}>
                <Input />
              </Form.Item>
              <Form.Item label="GitHub" className={course__form_input}>
                <Input />
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* <div className={cn(getFadeInAnimation('Right'))}>

        </div> */}
      </div>
    </Content>
  );
};

export default UserPage;
