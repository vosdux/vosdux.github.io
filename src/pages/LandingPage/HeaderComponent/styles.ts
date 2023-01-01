import { css } from '@linaria/core';

export const header = css`
height: 80vh;
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
`;

const Dosis = css`
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 300;
    src: url(https://fonts.gstatic.com/s/dosis/v27/HhyaU5sn9vOmLzlnC_W6EQ.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  `;

  
  export const centeredList = css`
  display: flex;
  flex-direction: row;
  `;
  
  export const centeredList__title = css`
  color: #fff;
  list-style-type: none;
  font-size: 4rem;
  text-transform: uppercase; 
  font-family: ${Dosis}, sans-serif; 
  font-weight: 100;
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

export const link = css `
text-align: right;
padding-right: 5%;
display: flex;
justify-content: end;
`;

export const link__castom = css`
padding-left: 2%;
list-style-type: none;
overflow: hidden;
`;

export const link__castom__point = css`
display: block;
position: relative;
padding: 0.2em 0;
color: #b0b2c3;
font-weight: 700;
font-size: 1.6rem;

&:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: #f4cb67;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-100%, 0, 0);
  };

&:hover{
    color: #fff;
}
&:hover::after{
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

&:focus::after{
    opacity: 1;
    transform: translate3d(0, 0, 0);
};

`;