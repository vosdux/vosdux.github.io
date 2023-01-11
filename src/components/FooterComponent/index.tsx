import React from 'react';
import { footer, footer__wrapper, footer__list, footer__list__link } from './styles';

export const FooterComponent = () => (
  <section className={footer}>
    <div className={footer__wrapper}>
      <div className={footer__list}>
        <a href="#" className={footer__list__link}>
          webstack@gmail.com
        </a>
        <span>©2023 Webstack</span>
      </div>
    </div>
  </section>
);
