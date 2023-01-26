import React, { FC, PropsWithChildren } from 'react';
import { Badge, Button, Card, Progress } from 'antd';
import { mb10, mb15 } from '@styles/global';
import { root, progress, wrapper } from './styles';

const { Meta } = Card;

type Props = {
  image: string;
  title: string;
  percent: number;
  purchased: boolean;
  onButtonClick: () => void;
};

const Wrapper: FC<PropsWithChildren<{ purchased: boolean }>> = ({ children, purchased }) =>
  purchased ? (
    <Badge.Ribbon text="Куплено" color="green">
      {children}
    </Badge.Ribbon>
  ) : (
    <>{children}</>
  );

export const CourseCard: FC<Props> = ({ image, title, percent, purchased, onButtonClick }) => {
  return (
    <Wrapper purchased={purchased}>
      <Card className={root}>
        <div className={wrapper}>
          <img src={image} height="50px" width="50px" className={mb15} />
          <Meta title={title} className={mb10} />
          <Progress className={progress} percent={percent} />
          <Button onClick={onButtonClick} type="primary">
            Подробнее
          </Button>
        </div>
      </Card>
    </Wrapper>
  );
};
