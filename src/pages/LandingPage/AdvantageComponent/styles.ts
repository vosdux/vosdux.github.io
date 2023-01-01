import { css } from '@linaria/core';

export const advantage = css`
    background-color: #1c1d25;
    width: 100vw;
    height: 155vh;
    padding-top: 40px;
`;

export const advantage__title = css`
    color: #ffffff;
    isibility: visible;
    animation-name: fadeInUp;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    margin: 0;
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
`;

export const advantage__list = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    padding-left: 2vw;
    padding-right: 2vw;

`;

export const advantage__list__card = css`
    margin-top: 40px;
    padding: 10px;
    border-radius: 10%;
    text-align: center;
    background-color: #fff;
    list-style-type: none;
    max-width: 25vw;
    min-height: 60vh;
    &:hover{
        transform: scale(1.1);
        transition: All 0.5s;  
    }
`;

export const advantage__list__card__image = css`
 width: 15vw;
 height: 15vh;
`;

export const advantage__list__card__title = css`
text-align: center;
    color: rgb(0, 0, 0);
    font-family: "Yanone Kaffeesatz", sans-serif;
    text-align: center;
    font-size: 2.4rem;
=`;

export const advantage__list__card__description = css`
color: rgb(0, 0, 0);
font-family: "Yanone Kaffeesatz", sans-serif;
text-align: center;
font-size: 1.4rem;
`;