import React, { FC } from 'react';
import { Form, FormInstance, Input, InputNumber, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message } from '@constants/formMessages';

type Props = {
  form: FormInstance;
};

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export const CourseForm: FC<Props> = ({ form }) => {
  const normFile = (e: any) => {
    e.fileList[0].progress = 100;
    e.fileList[0].status = 'success';
    return e.fileList;
  };

  return (
    <Form {...formItemLayout} form={form}>
      <Form.Item
        label="Название"
        name="name"
        rules={[
          { required: true, message },
          { min: 3, message: 'Минимум 3 символа' },
          { max: 30, message: 'Максиму 30 символов' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Описание"
        name="description"
        rules={[
          { required: true, message },
          { min: 3, message: 'Минимум 3 символа' },
          { max: 300, message: 'Максиму 300 символов' },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Цена" name="price" rules={[{ required: true, message }]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="image"
        label="Аватар"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message }]}
      >
        <Upload.Dragger customRequest={({ file, onSuccess }) => onSuccess('ok')} maxCount={1} listType="picture">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Кликните или перетащите файл для загрузки</p>
          <p className="ant-upload-hint">Можно загрузить только один файл формата png, jpg, jpeg. Не больше 9кб</p>
        </Upload.Dragger>
      </Form.Item>
    </Form>
  );
};
