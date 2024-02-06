import React from 'react';
import * as S from './BurgerMenuStyles';

function BurgerIcon({ toggleVisibility }) {
  return (
    <S.NavBurger className="nav__burger burger" onClick={toggleVisibility}>
      <S.BurgerLine className="burger__line"></S.BurgerLine>
      <S.BurgerLine className="burger__line"></S.BurgerLine>
      <S.BurgerLine className="burger__line"></S.BurgerLine>
    </S.NavBurger>
  );
}

export { BurgerIcon };
