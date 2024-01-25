import React from "react";
import * as S from './filterStyle';
function YearFilterMenu({ toggleVisibility, whatVisible, tracks }) {
  return (
    <>
      <S.FilterButton
        className={
          'filter__button button-year _btn-text' +
          `${whatVisible === 'year' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (whatVisible === 'year') {
            toggleVisibility('');
          } else {
            toggleVisibility('year');
          }
        }}
      >
        году выпуска
      </S.FilterButton>
      {whatVisible === 'year' && (
        <S.FilterMenuCenter className="filter__menu filter__menu_center">
          {tracks?.map((track) => (
            <S.FilterMenuItem key={track.id} className="filter__menu_item">
              {track.release_date}
            </S.FilterMenuItem>
          ))}
        </S.FilterMenuCenter>
      )}
    </>
  );
}

export { YearFilterMenu };