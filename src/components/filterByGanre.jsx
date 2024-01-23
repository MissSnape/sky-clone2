import React from "react";
import * as S from './filterStyle';
function GenreFilterMenu({ toggleVisibility, whatVisible, tracks }) {
  // const Set = new Set(tracks.forEach((track) => {
  //   track.genre
  // }));
  
  return (
    <>
      <S.FilterButton
        className={
          'filter__button button-year _btn-text' +
          `${whatVisible === 'genre' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (whatVisible === 'genre') {
            toggleVisibility('');
          } else {
            toggleVisibility('genre');
          }
        }}
      >
        жанру
      </S.FilterButton>
      {whatVisible === 'genre' && (
        <S.FilterMenuRight className="filter__menu filter__menu_right">
          {tracks.map((track) => (
            <S.FilterMenuItem key={track.id} className="filter__menu_item">
              {track.genre}
            </S.FilterMenuItem>
          ))}
        </S.FilterMenuRight>
      )}
    </>
  );
}

export { GenreFilterMenu };
// set обьект принимае  только уникальные значения, пройтись по массиву с жанрами методом forEarch, брать элементы класть его в set
//Array.from(set) этот массив map для списка 
//подготовить список по порядку