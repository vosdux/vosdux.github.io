import { css } from '@linaria/core';
import { wrapperWidth } from '@styles/global';

export const footer = css`
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const footer__list = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  list-style-type: none;
  font-size: 20px;
  text-transform: uppercase;
  font-family: monospace;
  font-weight: 100;
  margin: 0;
`;

export const footer__list__link = css`
  text-decoration: none;
  outline: none;
  color: #fff;
`;

export const footer__wrapper = css`
  max-width: ${wrapperWidth};
  margin: auto;
`;
