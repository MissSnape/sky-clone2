import React from "react";
import * as S from './filterStyle';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/actions/creators/skymusic";
function GenreFilterMenu({ 
  toggleVisibility,
  whatVisible,
  tracks,
  }) {
  const [genreArray, setGenre] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    if (tracks.length > 0){
      let genreSet = new Set();
   tracks.forEach((track) => genreSet.add(track.genre))
   setGenre(Array.from(genreSet));
    }
  }, [tracks])
  
  function handelClick(value){
    dispatch(setFilter({filter: 'genre', value}));
    
  }
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
             <S.FilterMenuItem key={index} onClick={()=>handelClick(genre)} className="filter__menu_item">
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