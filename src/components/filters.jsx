import { useState } from 'react';
import React from 'react';
import { AuthorFilterMenu } from './filterByArtist';
import { YearFilterMenu } from './ByYearOfRelease';
import { GenreFilterMenu } from './filterByGanre';
import * as S from'./filterStyle'
//import { useSelector } from 'react-redux';

function Filters({
  data,
  setYearSortValue,
  yearSortValue,
}) {
  const [whatVisible, setVisible] = useState(null);
  const toggleVisibility = (name) => setVisible(name);
  return (
    <S.CenterblockFilter className="centerblock__filter filter">
      <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>

      <AuthorFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={data}
        
      />
      <YearFilterMenu
          toggleVisibility={toggleVisibility}
          whatVisible={whatVisible}
          setYearSortValue={setYearSortValue}
          yearSortValue={yearSortValue}
      />
      <GenreFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={data}
      />
    </S.CenterblockFilter>
  );
}

export { Filters };