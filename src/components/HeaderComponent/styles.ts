import { css } from '@linaria/core';
import { wrapperWidth } from '@styles/global';

export const header = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const centeredList = css`
  display: flex;
  flex-direction: row;
`;

export const centered = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const centered__organization = css`
  color: #fff;
  text-transform: uppercase;
  font-size: 2.2rem;
  font-family: monospace;
`;

export const nav = css`
  max-width: ${wrapperWidth};
  margin: auto;
`;

export const links = css`
  margin: 0;
  padding: 20px 0 0 0;
  display: flex;
  justify-content: end;
`;
