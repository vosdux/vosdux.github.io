import React, { FC } from 'react';
import { AutoComplete, Form, FormInstance, Input } from 'antd';
import { message } from '@constants/formMessages';

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
    <Form.Item label="Ссылка на видео" name="video" rules={[{ required: true, message }]}>
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
      name="text"
      rules={[
        { required: true, message },
      ]}
    >
      {/* <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      /> */}
    </Form.Item>
  </Form>
);
