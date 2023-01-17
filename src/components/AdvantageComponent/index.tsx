import React from 'react';
import cn from 'classnames';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { ADVANTAGES } from './constants';
import {
  advantage,
  advantage__wrapper,
  advantage__title,
  advantage__list,
  advantage__list__card,
  advantage__list__card__title,
  advantage__list__card__description,
  advantage__list__card__image,
} from './styles';

export const AdvantageComponent = () => (
  <section className={advantage} id="advantage">
    <div className={advantage__wrapper}>
      <div className={cn(getSlideInAnimation('Up'))}>
        <h2 className={advantage__title}>Наши преимущества</h2>
      </div>
      <ul className={cn(advantage__list, getFadeInAnimation('Up'))}>
        {ADVANTAGES.map(({ title, description, image }, index) => (
          <li key={index} className={advantage__list__card}>
            <img src={image} alt="Easy form of information" className={advantage__list__card__image} />
            <p className={advantage__list__card__title}>{title}</p>
            <p className={advantage__list__card__description}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
