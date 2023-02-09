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

export const Dashboard__username = css`
  color: white;
  white-space: nowrap;
`;

export const Dashboard__sider = css`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Dashboard__logo = css`
  padding: 5px 0;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
`;
