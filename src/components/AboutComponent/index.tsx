import React from 'react';
import cn from 'classnames';
import { Steps } from 'antd';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { STEPS } from './constants';
import person from './images/person.png';
import {
  about,
  about__wrapper,
  about__title,
  about__text,
  about__text__title,
  about__flexbox,
  about__logo__png,
} from './styles';

export const AboutComponent = () => {
  return (
    <section className={about} id="about">
      <div className={about__wrapper}>
        <div className={cn(getSlideInAnimation('Up'))}>
          <h2 className={about__title}>О нас</h2>
        </div>
        <div className={about__flexbox}>
          <div className={cn(getFadeInAnimation('Left'))}>
            <img src={person} alt="logo" className={about__logo__png} />
          </div>
          <div className={cn(about__text, getFadeInAnimation('Right'))}>
            <p className={about__text__title}>
              Frontend разработка
              <br />
              Для профи и новичков
            </p>
            <Steps direction="vertical" items={STEPS} />
          </div>
        </div>
      </div>
    </section>
  );
};
