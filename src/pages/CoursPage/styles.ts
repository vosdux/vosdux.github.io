import { css } from '@linaria/core';
import { landigFont, landingTitileFontSize } from '@styles/global';

export const advantage = css`
  background-color: #1c1d25;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const advantage__wrapper = css``;

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
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 2vw;
  padding-right: 2vw;
  justify-content: space-between;
  gap: 20px;
`;

export const borderCard = css`
  border: 2px solid #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
