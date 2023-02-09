import { css } from '@linaria/core';

export const course__wrapper = css`
  min-height: 100%;
  background: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const course__wrapper_user = css`
  display: flex;
  gap: 45px;
  justify-content: center;
  align-items: center;
  @media (max-width: 756px) {
    flex-wrap: wrap;
  }
`;

export const course__wrapper_img = css`
  display: flex;
  gap: 10px;
  flex-direction: column;
  div {
    span {
      margin-right: 8px;
    }
  }
`;

export const course__wrapper_data = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  &:first-child {
    margin-right: 5px;
  }
  @media (max-width: 756px) {
    flex-wrap: wrap;
  }
`;

export const course__form_input = css``;
