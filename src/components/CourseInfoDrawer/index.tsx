import React, { FC } from 'react';
import { Button, Drawer, Rate, Row, Space, Spin, Statistic, Timeline, Typography } from 'antd';
import { LikeOutlined, DollarOutlined } from '@ant-design/icons';
import { hFull } from '@styles/global';

const { Paragraph } = Typography;
const { Item } = Timeline;

type Props = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  rating: number;
  description: string;
  lessons: { name: string; completed: boolean }[];
  price: string;
  name: string;
  completedCount: number;
  purchasedCount: number;
};

export const CourseInfoDrawer: FC<Props> = ({ isOpen, isLoading, rating, description, lessons, completedCount, purchasedCount, price, name, onClose }) => (
  <Drawer
    title={name}
    open={isOpen}
    onClose={onClose}
    footer={
      <Button size="large" type="primary">
        Купить
      </Button>
    }
  >
    {isLoading ? (
      <Row className={hFull} align="middle" justify="center">
        <Spin />
      </Row>
    ) : (
      <Space direction="vertical" size="middle">
        <Rate disabled defaultValue={rating} />
        <Statistic prefix={<LikeOutlined />} title="Пройдено" value={completedCount} suffix="Раз" />
        <Statistic prefix={<LikeOutlined />} title="Пройдено" value={purchasedCount} suffix="Раз" />
        <Paragraph>{description}</Paragraph>
        <Timeline>
          {lessons?.map((item) => (
            <Item key={item.name} color={item.completed ? 'green' : undefined}>
              {item.name}
            </Item>
          ))}
        </Timeline>
        <Statistic
          valueStyle={{ color: '#3f8600' }}
          prefix={<DollarOutlined />}
          title="Цена"
          value={price}
          suffix="Рублей"
        />
      </Space>
    )}
  </Drawer>
);
