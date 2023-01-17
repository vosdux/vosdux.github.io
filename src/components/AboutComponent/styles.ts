import { css } from '@linaria/core';
import { landigFont, landingTitileFontSize, wrapperWidth } from '@styles/global';

export const about = css`
  background-color: #e6ecf0;
  height: 100vh;
  padding-top: 40px;
`;

export const about__wrapper = css`
  max-width: ${wrapperWidth};
  margin: auto;
`;

export const about__title = css`
  color: #000;
  font-family: ${landigFont};
  margin: 0;
  text-align: center;
  font-size: ${landingTitileFontSize};
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
  font-size: 30px;
`;

export const about__flexbox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
`;

export const about__logo__png = css`
  width: 600px;
  height: 500px;
  padding-top: 40px;
`;
