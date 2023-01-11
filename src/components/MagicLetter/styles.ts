import { css } from '@linaria/core';

const Dosis = css`
  font-family: 'Dosis';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/dosis/v27/HhyaU5sn9vOmLzlnC_W6EQ.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
`;

export const root = css`
  color: #fff;
  list-style-type: none;
  font-size: 4rem;
  text-transform: uppercase;
  font-family: ${Dosis}, sans-serif;
  font-weight: 100;
`;