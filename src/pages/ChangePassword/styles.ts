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
export const container__сhangePassword = css`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 3px solid;
  border-image-source: linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%);
  padding: 5px;
`;
export const сhangePassword__block = css`
  padding: 45px 85px;
  @media (max-width: 746px) {
    padding: 25px 45px;
  }
  @media (max-width: 564px) {
    padding: 15px 30px;
  }
  h3 {
    margin: 15px 0 10px 0;
    font-size: 30px;
    @media (max-width: 746px) {
      text-align: center;
    }
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
    @media (max-width: 564px) {
      font-size: 16px;
      height: 40px;
      padding: 6px 16px;
    }
  }
`;

export const сhangePassword__btn = css`
  div {
    margin-inline-start: 0;
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  button {
    margin: 0;
  }
`;

export const сhangePassword__input = css`
  width: 400px;
  font-size: 20px;
  margin: 15px 0 5px 0;
  @media (max-width: 746px) {
    width: 350px;
  }
  @media (max-width: 564px) {
    width: 300px;
  }
  @media (max-width: 464px) {
    width: 250px;
  }
`;
