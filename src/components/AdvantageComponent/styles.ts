import { css } from '@linaria/core';
import { landigFont, landingTitileFontSize, wrapperWidth } from '@styles/global';

export const advantage = css`
  background-color: #1c1d25;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const advantage__wrapper = css`
  max-width: ${wrapperWidth};
  margin: auto;
`;

export const advantage__title = css`
  color: #ffffff;
  font-family: ${landigFont};
  margin: 0;
  text-align: center;
  font-size: ${landingTitileFontSize};
  font-weight: 400;
  text-transform: uppercase;
`;

export const advantage__list = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 2vw;
  padding-right: 2vw;
`;
