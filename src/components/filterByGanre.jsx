import React from "react";
import * as S from './filterStyle';
import { useState, useEffect } from "react";
function GenreFilterMenu({ 
  toggleVisibility,
  whatVisible,
  tracks,
  }) {
  const [genreArray, setGenre] = useState([]);

  useEffect(()=>{
    if (tracks){
      let genreSet = new Set();
   tracks.forEach((track) => genreSet.add(track.genre))
   setGenre(Array.from(genreSet));
    }
  }, [tracks])
  
  
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
          {genreArray.map((genre, index) => (
             <S.FilterMenuItem key={index} className="filter__menu_item">
              {genre}
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