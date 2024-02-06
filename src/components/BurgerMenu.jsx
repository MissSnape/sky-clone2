import React, { useState } from 'react';
import { BurgerIcon } from './BurgerIcon';
import { BurgerList } from './BurgerList';
import * as S from'./BurgerMenuStyles'

const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <S.MainNav className="main__nav nav">
      <S.NavLogo className="nav__logo logo">
        <S.LogoImage className="logo__image" src="img/logo.png" alt="logo"></S.LogoImage>
      </S.NavLogo>
      <BurgerIcon toggleVisibility={toggleVisibility} />
      <BurgerList isVisible={visible} />
    </S.MainNav>
  );
};

export { BurgerMenu };
