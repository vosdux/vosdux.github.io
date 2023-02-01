import React, { useEffect, useState } from 'react';
import { Button, Form, message, Modal, Row, Table, UploadFile } from 'antd';
import { observer } from 'mobx-react-lite';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { mb10 } from '@styles/global';
import { CourseForm } from '@components/CourseForm';
import { usePagination } from '@hooks/usePagination';
import courseStore from '@stores/courseStore';
import type { ColumnsType } from 'antd/es/table';

export type FormCourseType = {
  name: string;
  description: string;
  price: string;
  image: UploadFile[];
};
const initLimit = 5;

const AdminCoursePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [record, setRecord] = useState<CourseResponse | null>(null);
  const toggleModal = () => setIsOpen(!isOpen);
  const [form] = Form.useForm<FormCourseType>();

  const { page, setPage, limit, setLimit } = usePagination(1, initLimit);
  const { createCoruse, updateCourse, getCourse, deleteCourse, isLoading, courseData, courseTotal } = courseStore;

  useEffect(() => {
    getCourse(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const onCreateModalOpen = () => {
    toggleModal();
    setRecord(null);
    form.resetFields();
  };

  const onEditModalOpen = (record: CourseResponse) => {
    toggleModal();
    setRecord(record);
    const image: UploadFile[] = record.image
      ? [
          {
            uid: '0',
            name: record.image.split('/images/')[1],
            status: 'success',
            url: record.image,
            thumbUrl: record.image,
          },
        ]
      : undefined;

    form.setFieldsValue({ ...record, image });
  };

  const onCreate = async () => {
    try {
      const values = await form.validateFields();
      await createCoruse(values);
      message.success('Курс успешно создан');
      toggleModal();
      getCourse(page, limit);
    } catch (error) {}
  };

  const onEdit = async () => {
    try {
      const values = await form.validateFields();
      await updateCourse({ id: record.id, ...values });
      message.success('Курс отредактирован');
      toggleModal();
      getCourse(page, limit);
    } catch (error) {}
  };

  const onCourseDelete = async (id: string) => {
    try {
      await deleteCourse(id);
      getCourse(page, limit);
      message.success('Курс удален!');
    } catch (error) {}
  };

  const onDelete = (id: string) =>
    Modal.confirm({
      okText: 'Подтвердить',
      cancelText: 'Отмена',
      title: 'Вы действительно хотите удалить урок',
      onOk: async () => await onCourseDelete(id),
    });

  const columns: ColumnsType<CourseResponse> = [
    {
      dataIndex: 'name',
      title: 'Наимнование',
    },
    {
      dataIndex: 'price',
      title: 'Цена',
    },
    {
      align: 'right',
      render: (_, record) => (
        <>
          <Button onClick={() => onEditModalOpen(record)}>
            <EditOutlined />
          </Button>
          <Button>
            <DeleteOutlined onClick={() => onDelete(record.id)} />
          </Button>
        </>
      ),
    },
  ];

  const getModalProps = () => {
    if (record) {
      return {
        title: 'Редактировать курс',
        onOk: onEdit,
      };
    }

    return {
      title: 'Добавить курс',
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
        dataSource={courseData}
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
          total: courseTotal,
        }}
      />
      <Modal
        {...getModalProps()}
        open={isOpen}
        onCancel={toggleModal}
        okButtonProps={{ loading: isLoading }}
        cancelText="Закрыть"
        okText="Сохранить"
        destroyOnClose
        width={800}
      >
        <CourseForm form={form} />
      </Modal>
    </>
  );
};

export default observer(AdminCoursePage);
