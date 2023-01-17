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

export const advantage__list__card = css`
  margin-top: 40px;
  padding: 15px;
  border-radius: 10%;
  text-align: center;
  background-color: #fff;
  list-style-type: none;
  width: 280px;
  height: 300px;

  &:hover {
    transform: scale(1.1);
    transition: All 0.5s;
  }
`;

export const advantage__list__card__image = css`
  width: 96px;
  height: 98px;
`;

export const advantage__list__card__title = css`
  text-align: center;
  color: #000;
  font-family: ${landigFont};
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const advantage__list__card__description = css`
  color: #9e9e9e;
  font-family: ${landigFont};
  text-align: center;
  font-size: 16px;
`;
