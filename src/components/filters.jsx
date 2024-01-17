import { useState } from 'react';
import React from 'react';
import { AuthorFilterMenu } from './filterByArtist';
import { YearFilterMenu } from './ByYearOfRelease';
import { GenreFilterMenu } from './filterByGanre';
import * as S from'./filterStyle'
//import { useSelector } from 'react-redux';

function Filters({tracks}) {
  const [whatVisible, setVisible] = useState(null);
  const toggleVisibility = (name) => setVisible(name);
  return (
    <S.CenterblockFilter className="centerblock__filter filter">
      <S.FilterTitle className="filter__title">Искать по:</S.FilterTitle>

      <AuthorFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      />
      <YearFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      />
      <GenreFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={tracks}
      />
    </S.CenterblockFilter>
  );
}

export { Filters };