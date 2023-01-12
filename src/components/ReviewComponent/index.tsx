import { Button } from 'antd';
import React from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { review, review__title, review__wrapper, review__text, review__description } from './styles';

export const ReviewComponent = () => {
  const navigate = useNavigate();
  const fadeInLeft = getFadeInAnimation('Left');
  return (
    <section className={review} id="review">
      <h2 className={cn(review__title, getSlideInAnimation('Up'))}>Отзывы</h2>
      <div className={review__wrapper}>
        <p className={cn(review__text, fadeInLeft)}>Стань первым</p>
        <p className={cn(review__description, getFadeInAnimation('Right'))}>
          Мы только запустили свой проект. <br /> Стань первым, пройди свой курс по начальным ценам и получи скидку за отзыв
        </p>
        <Button className={cn(fadeInLeft)} type="primary" size="large" onClick={() => navigate('/login')}>
          Войти в личный кабинет
        </Button>
      </div>
    </section>
  );
};
