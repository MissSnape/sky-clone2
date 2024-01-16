import React from "react";
//import { tracks } from '../data';
import *as S from "./filterStyle";

function ByArtist({ toggleVisibility, filter, tracks }) {
  return (
    <>
    <S.FilterButton
      className={
        'filter__button button-author _btn-text' +
        `${filter === 'author' && ' filter__button_clicked'}`
      }
      onClick={() => {
        if (filter === 'author') {
          toggleVisibility('');
        } else {
          toggleVisibility('author');
        }
      }}
    >
      исполнителю
    </S.FilterButton>
    {filter === 'author' && (
     <S.FilterMenuLeft className="filter__menu filter__menu_left">
     {tracks.map((track) => (
       <S.FilterMenuItem key={track.id} className="filter__menu_item">
         {track.author}
       </S.FilterMenuItem>
     ))}
   </S.FilterMenuLeft>
    )}
  </>
  );
}

export {ByArtist};