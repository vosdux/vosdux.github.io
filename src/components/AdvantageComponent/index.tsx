import React from 'react';
import cn from 'classnames';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { CardComponent } from '@components/CardComponent';
import { ADVANTAGES } from './constants';
import { advantage, advantage__wrapper, advantage__title, advantage__list } from './styles';

export const AdvantageComponent = () => (
  <section className={advantage} id="advantage">
    <div className={advantage__wrapper}>
      <div className={cn(getSlideInAnimation('Up'))}>
        <h2 className={advantage__title}>Наши преимущества</h2>
      </div>
      <ul className={cn(advantage__list, getFadeInAnimation('Up'))}>
        {ADVANTAGES.map((item, index) => (
          <CardComponent key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);
