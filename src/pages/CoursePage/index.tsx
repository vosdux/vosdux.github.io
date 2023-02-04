import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Layout, Row, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { CourseInfoDrawer } from '@components/CourseInfoDrawer';
import { CourseCard } from '@components/CourseCard';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import courseStore from '@stores/courseStore';
import { course__wrapper, course__content, course__list } from './styles';
import { hFull } from '@styles/global';

const { Content } = Layout;

const CoursePage = () => {
  const { getCourses, getCourseInfo, isCourseinfoLoading, isLoading, courseData, courseInfo } = courseStore;
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (id: string) => {
    getCourseInfo(id);
    setIsOpen(true);
  };

  useEffect(() => {
    getCourses(1, 100);
  }, [getCourses]);

  return (
    <Content className={course__content}>
      <div className={course__wrapper}>
        <div className={cn(course__list, getFadeInAnimation('Right'))}>
          {isLoading && <Row className={hFull} align="middle" justify="center" ><Spin /></Row>}
          {courseData.map((item, index) => (
            <CourseCard key={index} onButtonClick={() => onOpen(item.id)} {...item} />
          ))}
        </div>
      </div>
      <CourseInfoDrawer
        name={courseInfo.name}
        description={courseInfo.description}
        rating={courseInfo.rating}
        price={courseInfo.price}
        lessons={courseInfo.lessons}
        isLoading={isCourseinfoLoading}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        completedCount={courseInfo.completedCount}
        purchasedCount={courseInfo.purchasedCount}
      />
    </Content>
  );
};

export default observer(CoursePage);
