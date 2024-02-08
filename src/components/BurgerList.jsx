import { NavLink } from 'react-router-dom';
import * as S from './BurgerMenuStyles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTrack } from '../store/actions/creators/skymusic';
function BurgerList({ isVisible }) {
  const dispatch = useDispatch();
  //Исправили проблему с проигрыванием трека при логауте
  const logOut = () => {
    dispatch(setCurrentTrack({}));
    localStorage.clear();
  };
  return (
    <S.NavMenu className="nav__menu menu">
      {isVisible && (
        <S.MenuList className="menu__list">
          <NavLink to="/">
            <S.MenuItem className="menu__item">
              <S.MenuLink href="http://" className="menu__link">
                Главное
              </S.MenuLink>
            </S.MenuItem>
          </NavLink>
          <NavLink to="/MyPlayList">
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
      )}
    </S.NavMenu>
  );
}

export { BurgerList };
