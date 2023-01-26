import React, { FC } from 'react';
import { Button, Drawer, Rate, Space, Statistic, Timeline, Typography } from 'antd';
import { LikeOutlined, DollarOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;
const { Item } = Timeline;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CourseInfoDrawer: FC<Props> = ({ isOpen, onClose }) => (
  <Drawer
    title="HTML start"
    open={isOpen}
    onClose={onClose}
    footer={
      <Button size="large" type="primary">
        Купить
      </Button>
    }
  >
    <Space direction="vertical" size="middle">
      <Rate disabled defaultValue={3} />
      <Statistic prefix={<LikeOutlined />} title="Пройдено" value={400} suffix="Раз" />
      <Paragraph>
        Классный курс для начинающих Классный курс для начинающих Классный курс для начинающих Классный курс для
        начинающих Классный курс для начинающих
      </Paragraph>
      <Timeline>
        <Item>Урок 1</Item>
        <Item>Урок 2</Item>
        <Item>Урок 3</Item>
        <Item>Урок 4</Item>
      </Timeline>
      <Statistic
        valueStyle={{ color: '#3f8600' }}
        prefix={<DollarOutlined />}
        title="Цена"
        value={400}
        suffix="Рублей"
      />
    </Space>
  </Drawer>
);
