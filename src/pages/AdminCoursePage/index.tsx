import React, { useState } from 'react';
import { Button, Form, message, Modal, Row, Table, UploadFile } from 'antd';
import { observer } from 'mobx-react-lite';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { mb10 } from '@styles/global';
import { CourseForm } from '@components/CourseForm';
import adminStore from '@stores/adminStore';
import type { ColumnsType } from 'antd/es/table';

export type FormCourseType = {
  name: string;
  description: string;
  price: string;
  avatar: UploadFile[];
}

const AdminCoursePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [record, setRecord] = useState<CourseResponse | null>(null);
  const toggleModal = () => setIsOpen(!isOpen);
  const [form] = Form.useForm<FormCourseType>();

  const { createCoruse, updateCourse, isLoading } = adminStore;

  const onCreateModalOpen = () => {
    toggleModal();
    setRecord(null);
  };

  const onEditModalOpen = (record: CourseResponse) => {
    toggleModal();
    setRecord(record);
  };

  const onCreate = async () => {
    try {
      const values = await form.validateFields();
      await createCoruse(values);
      message.success('Курс успешно создан');
      toggleModal();
    } catch (error) {}
  };

  const onEdit = async () => {
    try {
      const values = await form.validateFields();

      await updateCourse({ id: record.id, ...values });
      message.success('Курс отредактирован');
      toggleModal();
    } catch (error) {}
  };

  const columns: ColumnsType<CourseResponse> = [
    {
      dataIndex: 'name',
      title: 'Наимнование',
    },
    {
      render: (_, record) => (
        <Button onClick={() => onEditModalOpen(record)}>
          <EditOutlined />
        </Button>
      ),
    },
    {
      render: () => (
        <Button>
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  const getProps = () => {
    if (record) {
      return {
        title: 'Редактировать курс',
        onOk: onEdit,
        initialValues: record,
      };
    }

    return {
      title: 'Добавить курс',
      onOk: onCreate,
    };
  };

  const modalProps = getProps();

  return (
    <>
      <Row justify="end" className={mb10}>
        <Button onClick={onCreateModalOpen}>Добавить</Button>
      </Row>
      <Table columns={columns} />
      <Modal
        title={modalProps.title}
        onOk={modalProps.onOk}
        open={isOpen}
        onCancel={toggleModal}
        okButtonProps={{ loading: isLoading }}
        cancelText="Закрыть"
        okText="Сохранить"
        destroyOnClose
        width={800}
      >
        <CourseForm form={form} initialValues={modalProps.initialValues} />
      </Modal>
    </>
  );
};

export default observer(AdminCoursePage);
