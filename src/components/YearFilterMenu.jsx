import * as S from './FilterStyles';
import React from 'react';
function YearFilterMenu({
  toggleVisibility,
  whatVisible,
  setYearSortValue,
  yearSortValue,
}) {
  const filterToggle = (value) => {
    setYearSortValue(value);
  };
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
      {(yearSortValue === 'new' || yearSortValue === 'old') && (
        <div className="filter_point_year">
          <p className="filter_point_year__text">1</p>{' '}
        </div>
      )}
      {whatVisible === 'year' && (
        <S.FilterMenuCenter className="filter__menu filter__menu_center">
          <S.FilterMenuItem
            key={1}
            className="filter__menu_item"
            onClick={(e) => {
              e.stopPropagation();
              filterToggle('base');
            }}
          >
            По умолчанию
          </S.FilterMenuItem>
          <S.FilterMenuItem
            key={1}
            className={
              'filter__menu_item' + 
              `${
                yearSortValue === 'old' &&
                ' filter__button_clicked'
              }`
            }
            onClick={(e) => {
              e.stopPropagation();
              filterToggle('old');
            }}
          >
            Сначала старые
          </S.FilterMenuItem>
          <S.FilterMenuItem
            key={1}
            className={
              'filter__menu_item' + 
              `${
                yearSortValue === 'new' &&
                ' filter__button_clicked'
              }`
            }
            onClick={(e) => {
              e.stopPropagation();
              filterToggle('new');
            }}
          >
            Сначала новые
          </S.FilterMenuItem>
        </S.FilterMenuCenter>
      )}
    </>
  );
}

export { YearFilterMenu };
