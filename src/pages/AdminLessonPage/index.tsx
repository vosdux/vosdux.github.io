import React, { useState } from 'react';
import { Button, Form, Modal, Row, Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { EditOutlined } from '@ant-design/icons';
import { LessonForm } from '@components/LessonForm';
import { mb10 } from '@styles/global';
import type { ColumnsType } from 'antd/es/table';

const columns: ColumnsType = [
  {
    dataIndex: 'name',
    title: 'Наимнование',
  },
  {
    render: () => <EditOutlined />,
  },
];

const AdminLessonPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [form] = Form.useForm();
  
  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
    } catch (error) {}
  };

  return (
    <>
      <Row justify="end" className={mb10}>
        <Button onClick={toggleModal}>Добавить</Button>
      </Row>
      <Table columns={columns} />
      <Modal title="Добавить курс" open={isOpen} onCancel={toggleModal} onOk={onSubmit} cancelText="Закрыть" okText="Сохранить">
        <LessonForm form={form} />
      </Modal>
    </>
  );
};

export default observer(AdminLessonPage);
