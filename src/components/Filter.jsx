import { useState } from 'react';
import { AuthorFilterMenu } from './AuthorFilterMenu';
import { YearFilterMenu } from './YearFilterMenu';
import { GenreFilterMenu } from './GenreFilterMenu';
import * as S from './FilterStyles';
//import { useSelector } from 'react-redux';
import React from 'react';
function Filter({
  data,
  setGenreFilterArray,
  setAuthorFilterArray,
  authorFilterArray,
  genreFilterArray,
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
        setAuthorFilterArray={setAuthorFilterArray}
        authorFilterArray={authorFilterArray}
      />
      
      <GenreFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        tracks={data}
        setGenreFilterArray={setGenreFilterArray}
        genreFilterArray={genreFilterArray}
      />
       <YearFilterMenu
        toggleVisibility={toggleVisibility}
        whatVisible={whatVisible}
        setYearSortValue={setYearSortValue}
        yearSortValue={yearSortValue}
      />
    </S.CenterblockFilter>
  );
}

export { Filter };
