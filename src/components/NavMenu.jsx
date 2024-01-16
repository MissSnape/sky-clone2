import React from "react";
import * as S from "./MenuStyles";
import { NavLink} from 'react-router-dom';
function NavMenu() {
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <S.NavMenu className="nav__menu menu">
        <S.MenuList className="menu__list">
          <NavLink to="/">
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://" className="menu__link">
                Главное
              </S.MenuLink>
            </S.MenuItem>
          </NavLink>
          <NavLink to="/myplaylist">
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://" className="menu__link">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
          </NavLink>
          <NavLink to="/login">
            <S.MenuItem className="menu__item" onClick={logOut}>
              <S.MenuLink href="http://" className="menu__link">
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </NavLink>
        </S.MenuList>
      
    </S.NavMenu>
  );
}
    
export {NavMenu} ;
