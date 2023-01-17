import { css } from '@linaria/core';
import { landigFont } from '@styles/global';

export const root = css`
  width: 100%;
  height: 95vh;
  overflow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${landigFont};
`;

export const container__emailVerify = css`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: 3px solid;
  border-image-source: linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%);
  padding: 5px;
  background: #fff;
`;
export const emailVerify__block = css`
  padding: 35px 65px;
  @media (max-width: 746px) {
    padding: 25px 45px;
  }
  @media (max-width: 564px) {
    padding: 20px 35px;
  }
  @media (max-width: 440px) {
    padding: 15px 25px;
  }
`;

export const emailVerify__topBlock = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 2px #eee solid;
  @media (max-width: 564px) {
    padding-bottom: 15px;
  }
  div {
    text-align: center;
  }
  h3 {
    margin: 15px 0 10px 0;
    font-size: 30px;
  }
  p {
    font-size: 20px;
    margin: 15px 0 10px 0;
  }
`;

export const emailVerify__bottomBlock = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  @media (max-width: 564px) {
    padding-top: 15px;
  }
  div {
    text-align: center;
  }
  h3 {
    margin: 15px 0 10px 0;
    font-size: 30px;
  }
  p {
    max-width: 800px;
    font-size: 20px;
    margin: 10px 0 20px 0;
    span {
      color: #1677ff;
      cursor: pointer;
      transition: 3ms;
      &:hover {
        color: #0958d9;
      }
    }
  }
  button {
    font-size: 18px;
    height: 50px;
    padding: 7px 18px;
    margin-bottom: 5px;
    margin-right: 10px;
  }
`;
