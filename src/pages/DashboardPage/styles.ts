import { css } from '@linaria/core';
import { landigFont, landingTitileFontSize } from '@styles/global';

export const DashBoard__title = css`
  font-family: ${landigFont};
  margin: 20px 0;
  text-align: center;
  font-size: ${landingTitileFontSize};
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
`;

export const Dashboard__transparent = css`
  min-height: 100vh;
  background-color: transparent;
  section {
    background-color: transparent;
  }
`;
