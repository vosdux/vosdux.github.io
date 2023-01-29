import { css } from '@linaria/core';

export const course__content = css`
  margin: 0 16px 10px 16px;
`;

export const course__wrapper = css`
  min-height: 100%;
  background: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  overflow: hidden;
`;

export const course__list = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 40px;
  gap: 30px;

  @media screen and (max-width: 501px) {
    justify-content: center;
  }
`;

export const borderCard = css`
  border: 2px solid #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
