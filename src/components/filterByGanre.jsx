import React from "react";
import * as S from './filterStyle';
function Ganre({
    toggleVisibility, filter, tracks
  }) {
    return (
      <>
      <S.FilterButton
        className={"filter__button button-year _btn-text" +`${filter === 'genre' && (' filter__button_clicked')}`}
        onClick={() => {
          if (filter === 'genre') {
            toggleVisibility('')
          } else {
            toggleVisibility('genre')
          }
        }}
      >
        жанру
      </S.FilterButton>
      {filter === 'genre' && (
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

  
export {Ganre};