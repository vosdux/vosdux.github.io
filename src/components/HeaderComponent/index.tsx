import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { MagicLetter } from '@components/MagicLetter';
import { Menuitem } from '@components/MenuItem';
import { CustomParticles } from '@components/CustomParticles';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { FIRST_ANIMATED_WORD, MENU_ITEMS, SECOND_ANIMATED_WORD } from './constants';
import {
  header,
  centered,
  centeredList,
  centered__organization,
  links,
  nav,
} from './styles';

const slowScroll = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <CustomParticles />
      <nav className={nav}>
        <ul className={links}>
          {MENU_ITEMS.map(({ to, children, type }) => (
            <Menuitem key={to} onClick={type === 'scroll' ? () => slowScroll(to) : () => navigate(to)}>
              {children}
            </Menuitem>
          ))}
        </ul>
      </nav>
      <header className={header}>
        <ul className={centeredList}>
          {FIRST_ANIMATED_WORD.map(({ letter, iterations }, index) => (
            <MagicLetter iterations={iterations} min={0} max={9} letter={letter} key={index} />
          ))}
          <li style={{ padding: '5px' }}> </li>
          {SECOND_ANIMATED_WORD.map(({ letter, iterations }, index) => (
            <MagicLetter iterations={iterations} min={0} max={9} letter={letter} key={index} />
          ))}
        </ul>
        <div className={classNames(centered, getFadeInAnimation('Left'))}>
          <code className={centered__organization}>{'<WEBSTACK />'}</code>
        </div>
      </header>
    </>
  );
};
