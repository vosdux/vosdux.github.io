import { css } from '@linaria/core';
import { landigFont, landingTitileFontSize } from '@styles/global';

export const review = css`
  background-color: #e6ecf0;
  padding-top: 40px;
`;

export const review__title = css`
  color: #000;
  font-family: ${landigFont};
  margin: 0;
  text-align: center;
  font-size: ${landingTitileFontSize};
  font-weight: 400;
  text-transform: uppercase;
`;

export const review__wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
`;

export const review__text = css`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 25px;
  font-family: ${landigFont};
  font-style: italic;
`;

export const review__description = css`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 20px;
  font-family: ${landigFont};
  font-style: italic;
  text-align: center;
`;
