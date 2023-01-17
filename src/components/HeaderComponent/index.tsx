import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { MagicLetter } from '@components/MagicLetter';
import { Menuitem } from '@components/MenuItem';
import { CustomParticles } from '@components/CustomParticles';
import { getFadeInAnimation } from '@utils/getFadeInAnimation';
import { authStore } from '@stores/authStore/index';
import { FIRST_ANIMATED_WORD, AUTH_MENU_ITEMS, NON_AUTH_MENU_ITEMS, SECOND_ANIMATED_WORD } from './constants';
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

export const HeaderComponent = observer(() => {
  const navigate = useNavigate();
  const { isAuthenticated } = authStore;

  const menuItems = isAuthenticated ? AUTH_MENU_ITEMS : NON_AUTH_MENU_ITEMS;

  return (
    <>
      <CustomParticles />
      <nav className={nav}>
        <ul className={links}>
          {menuItems.map(({ to, children, type }) => (
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
          <span style={{ padding: '5px' }} />
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
});
