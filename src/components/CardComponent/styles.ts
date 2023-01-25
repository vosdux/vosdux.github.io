import { css } from '@linaria/core';
import { landigFont } from '@styles/global';

export const advantage__list__card = css`
  margin-top: 30px;
  padding: 15px;
  border-radius: 10%;
  text-align: center;
  background-color: #fff;
  list-style-type: none;
  width: 280px;
  height: 300px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
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
