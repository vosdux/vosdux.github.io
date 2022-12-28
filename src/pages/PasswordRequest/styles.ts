import { css } from '@linaria/core';

export const root = css`
  width: 100%;
  height: 95vh;
  overflow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const container__login = css`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 3px solid;
  border-image-source: linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%);
  padding: 5px;
`;
export const login__block = css`
  padding: 45px 95px;
  @media (max-width: 746px) {
    padding: 25px 65px;
  }
  @media (max-width: 564px) {
    padding: 25px 55px;
  }
  h3 {
    margin: 15px 0 10px 0;
    font-size: 30px;
  }
  p {
    font-size: 20px;
    margin: 15px 0 10px 0;
  }
  button {
    font-size: 18px;
    height: 50px;
    padding: 7px 18px;
    margin-bottom: 5px;
    margin-right: 10px;
  }
`;

export const login__btn = css`
  div {
    margin-inline-start: 0;
  }

  button {
    margin: 0;
  }
`;

export const register__input = css`
  width: 400px;
  font-size: 20px;
  @media (max-width: 746px) {
    width: 350px;
  }
  @media (max-width: 564px) {
    width: 250px;
  }
`;
