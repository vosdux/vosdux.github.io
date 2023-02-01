import React, { FC } from 'react';
import { Form, FormInstance, Input } from 'antd';
import { message } from '@constants/formMessages';
import { ApiSelect } from '@components/ApiSelect';

type Props = {
  form: FormInstance;
};

export const LessonForm: FC<Props> = ({ form }) => (
  <Form form={form}>
    <Form.Item
      label="Название"
      name="name"
      rules={[
        { required: true, message },
        { min: 3, message: 'Минимум 3 символа' },
        { max: 20, message: 'Максиму 30 символов' },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Ссылка на видео"
      name="video"
      rules={[
        { required: true, message },
        {
          pattern:
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
          message: 'Не верный url',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Описание"
      name="text"
      rules={[
        { required: true, message },
        { min: 3, message: 'Минимум 3 символа' },
        { max: 300, message: 'Максиму 300 символов' },
      ]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      label="ДЗ"
      name="homework"
      rules={[
        { required: true, message },
        { min: 3, message: 'Минимум 3 символа' },
        { max: 300, message: 'Максиму 300 символов' },
      ]}
    >
      <Input.TextArea />
    </Form.Item>
    <Form.Item label="Курс" name="courseId" rules={[{ required: true, message }]}>
      <ApiSelect serachFiled="search" url="courses" path="rows" valueField="id" lableField="name" />
    </Form.Item>
  </Form>
);
