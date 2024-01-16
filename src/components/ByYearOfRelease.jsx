import React from "react";
import * as S from './filterStyle';
function ByOfYearOfRelease({ toggleVisibility, filter,  tracks}) {
    return (
      <>
      <S.FilterButton
        className={
          'filter__button button-year _btn-text' +
          `${filter === 'year' && ' filter__button_clicked'}`
        }
        onClick={() => {
          if (filter === 'year') {
            toggleVisibility('');
          } else {
            toggleVisibility('year');
          }
        }}
      >
        году выпуска
      </S.FilterButton>
      {filter === 'year' && (
       <S.FilterMenuCenter className="filter__menu filter__menu_center">
       {tracks.map((track) => (
         <S.FilterMenuItem key={track.id} className="filter__menu_item">
           {track.release_date}
         </S.FilterMenuItem>
       ))}
     </S.FilterMenuCenter>
      )}
    </>
    );
  }

export {ByOfYearOfRelease};