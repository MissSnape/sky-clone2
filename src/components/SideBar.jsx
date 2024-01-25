import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './SideBarStyle'
function SideBar() {
    return (
      <S.SidebarBlock className="sidebar__block">
      <S.SidebarList className="sidebar__list">
        <S.SidebarItem className="sidebar__item">
          <NavLink to='/Collection/1'>
            {/* <S.SidebarLink className="sidebar__link" href="#"> */}
              <S.SidebarImg
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              ></S.SidebarImg>
            {/* </S.SidebarLink> */}
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem className="sidebar__item">
        <NavLink to='/Collection/2'>
            {/* <S.SidebarLink className="sidebar__link" href="#"> */}
              <S.SidebarImg
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              ></S.SidebarImg>
            {/* </S.SidebarLink> */}
          </NavLink>
        </S.SidebarItem>
        <S.SidebarItem className="sidebar__item">
        <NavLink to='/Collection/3'>
            {/* <S.SidebarLink className="sidebar__link" href="#"> */}
              <S.SidebarImg
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              ></S.SidebarImg>
            {/* </S.SidebarLink> */}
          </NavLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
    );
  }
  
  export { SideBar };