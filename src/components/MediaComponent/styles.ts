import { css } from '@linaria/core';
import { landigFont, landingTitileFontSize, wrapperWidth } from '@styles/global';

export const media = css`
  background-color: #1c1d25;
  width: 100vw;
  padding-top: 40px;
`;

export const media__title = css`
  color: #ffffff;
  font-family: ${landigFont};
  margin: 0;
  text-align: center;
  font-size: ${landingTitileFontSize};
  font-weight: 400;
  text-transform: uppercase;
`;

export const media__wrapper = css`
  display: flex;
  padding-top: 50px;
  padding-bottom: 70px;
  justify-content: space-between;
  max-width: ${wrapperWidth};
  margin: auto;
`;
