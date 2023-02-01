import React, { useState, useEffect } from 'react';
import { Button, Form, message, Modal, Row, Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { LessonForm } from '@components/LessonForm';
import { mb10 } from '@styles/global';
import { usePagination } from '@hooks/usePagination';
import lessonStore from '@stores/lessonStore';
import type { ColumnsType } from 'antd/es/table';

export type LessonFormType = {
  name: string;
  video: string;
  text: string;
  homework: string;
  courseId: string;
};

const initLimit = 5;

const AdminLessonPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const [editedId, setEditedId] = useState('');
  const [form] = Form.useForm<LessonFormType>();

  const { page, setPage, limit, setLimit } = usePagination(1, initLimit);
  const { getLessons, createLesson, upadateLesson, deleteLesson, isLoading, lessonData, lessonTotal } = lessonStore;

  useEffect(() => {
    getLessons(page, limit);
  }, [page, limit, getLessons]);

  const onCreateModalOpen = () => {
    form.resetFields();
    setEditedId('');
    toggleModal();
  };

  const onEditModlaOpen = (record: LessonInstance) => {
    form.setFieldsValue({ ...record, courseId: record.course.courseId });
    setEditedId(record.id);
    toggleModal();
  };

  const onCreate = async () => {
    try {
      const values = await form.validateFields();

      await createLesson(values);
      message.success('Урок упешно создан!');
      toggleModal();
      getLessons(page, limit);
    } catch (error) {}
  };

  const onEdit = async () => {
    try {
      const values = await form.validateFields();

      await upadateLesson({ ...values, id: editedId });
      message.success('Урок упешно отредактиоован!');
      toggleModal();
      getLessons(page, limit);
    } catch (error) {}
  };

  const onDeleteLesson = async (id: string) => {
    try {
      await deleteLesson(id);
      message.success('Урок успешно удален!');
      getLessons(page, limit);
    } catch (error) {}
  };

  const onDelete = (id: string) =>
    Modal.confirm({
      okText: 'Подтвердить',
      cancelText: 'Отмена',
      title: 'Вы действительно хотите удалить урок',
      onOk: async () => await onDeleteLesson(id),
    });

  const columns: ColumnsType<LessonInstance> = [
    {
      dataIndex: 'name',
      title: 'Наимнование',
    },
    {
      dataIndex: 'course.courseName',
      title: 'Курс',
      render: (text, record) => {
        return record.course.courseName;
      },
    },
    {
      align: 'right',
      render: (_, record) => (
        <>
          <Button onClick={() => onEditModlaOpen(record)}>
            <EditOutlined />
          </Button>
          <Button onClick={() => onDelete(record.id)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const getModalProps = () => {
    if (editedId) {
      return {
        title: 'Редактиовать урок',
        onOk: onEdit,
      };
    }

    return {
      title: 'Создать урок',
      onOk: onCreate,
    };
  };

  return (
    <>
      <Row justify="end" className={mb10}>
        <Button onClick={onCreateModalOpen}>Добавить</Button>
      </Row>
      <Table
        columns={columns}
        dataSource={lessonData}
        loading={isLoading}
        rowKey="id"
        pagination={{
          current: page,
          onChange: (page, pageSize) => {
            setPage(page);
            setLimit(pageSize);
          },
          showSizeChanger: true,
          pageSize: limit,
          total: lessonTotal,
        }}
      />
      <Modal
        {...getModalProps()}
        open={isOpen}
        onCancel={toggleModal}
        okButtonProps={{ loading: isLoading }}
        cancelText="Закрыть"
        okText="Сохранить"
      >
        <LessonForm form={form} />
      </Modal>
    </>
  );
};

export default observer(AdminLessonPage);
