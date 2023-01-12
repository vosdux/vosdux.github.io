import { css } from '@linaria/core';

export const root = css`
  width: 100%;
  height: 95vh;
  overflow: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const container__login = css`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 3px solid;
  border-image-source: linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%);
  padding: 5px;
  background: #fff;
`;
export const login__block = css`
  padding: 45px 95px;

  @media (max-width: 746px) {
    padding: 25px 25px;
  }
  @media (max-width: 564px) {
    padding: 25px 35px;
  }
  @media (max-width: 440px) {
    padding: 15px 25px;
  }
`;

export const register__input = css`
  width: 400px;
  @media (max-width: 746px) {
    width: 350px;
  }
  @media (max-width: 564px) {
    width: 250px;
  }
`;

export const register__checkbox = css`
  div {
    margin-inline-start: 0;
  }
`;

export const register__btn = css`
  margin-inline-start: 0;
  display: flex;
  flex-direction: row;
  button {
    margin-right: 10px;
  }
  div {
    max-width: 100%;
    margin-inline-start: 0;
  }
`;
