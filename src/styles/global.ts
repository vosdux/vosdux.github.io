import { css } from '@linaria/core';

export const globals = css`
  :global() {
    body {
      margin: 0;
      overflow-x: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }
  }
`;

export const primaryColor = '#f4cb67';
export const landigFont = "'Yanone Kaffeesatz', sans-serif";
export const landingTitileFontSize = '34px';
export const wrapperWidth = '1080px';

export const mb10 = css`
  margin-bottom: 10px !important;
`;

export const mb15 = css`
  margin-bottom: 15px !important;
`;

export const hFull = css`
  height: 100% !important;
`;
