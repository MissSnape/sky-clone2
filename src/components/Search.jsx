import React from "react";
import * as S from'./searchStyle';
function Search() {
    return(
      <S.CenterblockSearch className="centerblock__search search">
      <S.SearchSvg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      ></S.SearchText>
    </S.CenterblockSearch>
    )
    
}
export {Search};