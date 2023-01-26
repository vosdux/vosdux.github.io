import React, { useState } from 'react';
import cn from 'classnames';
import { Layout } from 'antd';
import { CourseInfoDrawer } from '@components/CourseInfoDrawer';
import { CourseCard } from '@components/CourseCard';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { MOCK } from './constants';
import { course__wrapper, course__content, course__list } from './styles';

const { Content } = Layout;

const CoursePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Content className={course__content}>
      <div className={course__wrapper}>
        <div className={cn(course__list, getFadeInAnimation('Right'))}>
          {MOCK.map((item, index) => (
            <CourseCard key={index} onButtonClick={() => setIsOpen(true)} {...item} />
          ))}
        </div>
      </div>
      <CourseInfoDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Content>
  );
};

export default CoursePage;
