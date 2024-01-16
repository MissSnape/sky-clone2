import React from "react";
import * as S from './SideBarStyle'
function SideBarPlug() {
    return (
      <S.SidebarBlock className="sidebar__block">
      <S.SidebarList className="sidebar__list">
        <S.SidebarItem className="sidebar__item">
          <S.SidebarLink className="sidebar__link" href="#">
            <S.SidebarImg
              className="sidebar__img"
              src="img/plug/r_menu_plug.svg"
              alt="day's playlist"
            ></S.SidebarImg>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem className="sidebar__item">
          <S.SidebarLink className="sidebar__link" href="#">
            <S.SidebarImg
              className="sidebar__img"
              src="img/plug/r_menu_plug.svg"
              alt="day's playlist"
            ></S.SidebarImg>
          </S.SidebarLink>
        </S.SidebarItem>
        <S.SidebarItem className="sidebar__item">
          <S.SidebarLink className="sidebar__link" href="#">
            <S.SidebarImg
              className="sidebar__img"
              src="img/plug/r_menu_plug.svg"
              alt="day's playlist"
            ></S.SidebarImg>
          </S.SidebarLink>
        </S.SidebarItem>
      </S.SidebarList>
    </S.SidebarBlock>
    );
  }
  
  export { SideBarPlug };
  