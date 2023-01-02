import { css } from '@linaria/core';

export const about = css`
  background-color: #e6ecf0;
  height: 100vh;
  width: 100vw;
  padding-top: 40px;
`;

export const about__title = css`
  isibility: visible;
  animation-name: fadeInUp;
  color: #000;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  margin: 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const about__text = css`
  width: 50vw;
  padding-left: 15px;
  padding-right: 30px;
`;

export const about__text__title = css`
  font-family: monospace;
  font-size: 2rem;
`;

export const about__text__description = css`
  font-size: 3rem;
`;

export const about__logo = css`
  width: 50vw;
`;

export const about__flexbox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
`;

export const about__logo__png = css`
  width: 50vw;
  height: 70vh;
  padding-top: 40px;
`;
