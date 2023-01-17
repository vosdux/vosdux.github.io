import React from 'react';
import cn from 'classnames';
import { media, media__title, media__wrapper } from './styles';
import { getSlideInAnimation } from '@utils/getSlideInAnimation';
import { getFadeInAnimation } from '../../utils/getFadeInAnimation';

export const MediaComponent = () => (
  <section className={media} id="media">
    <h2 className={cn(media__title, getSlideInAnimation('Up'))}>Наш канал на Youtube</h2>
    <div className={media__wrapper}>
      <iframe
        className={cn(getFadeInAnimation('Left'))}
        width="500"
        height="315"
        src="https://www.youtube.com/embed/9-GfpVuLPjc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className={cn(getFadeInAnimation('Right'))}
        width="500"
        height="315"
        src="https://www.youtube.com/embed/ApIStAZa8Vc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);
