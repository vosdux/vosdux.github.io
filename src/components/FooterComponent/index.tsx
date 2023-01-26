import React from 'react';
import { footer, footer__wrapper, footer__list, footer__list__link } from './styles';

export const FooterComponent = () => (
  <section className={footer}>
    <div className={footer__wrapper}>
      <div className={footer__list}>
        <a href="mailto:webstackfe@gmail.com" className={footer__list__link}>
          webstackfe@gmail.com
        </a>
        <span>©2023 Webstack</span>
      </div>
    </div>
  </section>
);
