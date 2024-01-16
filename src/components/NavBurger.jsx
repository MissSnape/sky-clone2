import React, {useState} from 'react';
import { NavMenu } from './NavMenu';
import * as S from './MenuStyles'

function NavBurger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  return (
    <>
      <S.NavBurger className="nav__burger burger" onClick={toggleVisibility}>
      <S.BurgerLine className="burger__line"></S.BurgerLine>
      <S.BurgerLine className="burger__line"></S.BurgerLine>
      <S.BurgerLine className="burger__line"></S.BurgerLine>
    </S.NavBurger>
      {visible && <NavMenu />}
    </>
  )
}

export {NavBurger};