import { css } from '@linaria/core';
import { landigFont, primaryColor } from '@styles/global';

export const link__custom = css`
  padding-left: 2%;
  list-style-type: none;
  overflow: hidden;
  cursor: pointer;
`;

export const link__custom__point = css`
  display: block;
  position: relative;
  padding: 0.2em 0;
  color: #b0b2c3;
  font-weight: 700;
  font-size: 18px;
  font-family: ${landigFont};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${primaryColor};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-100%, 0, 0);
  }

  &:hover {
    color: #fff;
  }
  &:hover::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;