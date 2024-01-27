import * as S from './filterStyle';
import React from 'react';
import { useState, useEffect } from 'react';
function AuthorFilterMenu({ 
  toggleVisibility,
  whatVisible,
  tracks,
   }) {
    const [authorArray, setAuthorArray] = useState([]);
    useEffect(() => {
      const authorSet = new Set();
      if (tracks.length > 0)
      {tracks.forEach((track) => authorSet.add(track.author))
      }
      setAuthorArray(Array.from(authorSet));
    }, [tracks]);
    console.log(authorArray);
    

    return (
      <>
        <S.FilterButton
          className={
            'filter__button button-author _btn-text' +
            `${whatVisible === 'author' && ' filter__button_clicked'}`
          }
          onClick={() => {
            if (whatVisible === 'author') {
              toggleVisibility('');
            } else {
              toggleVisibility('author');
            }
          }}
        >
          исполнителю
        </S.FilterButton>
       
        {whatVisible === 'author' && (
          <S.FilterMenuLeft className="filter__menu filter__menu_left">
            {authorArray.map((author, index) => (
              <S.FilterMenuItem key={index} className="filter__menu_item">
              
                {author}
              </S.FilterMenuItem>
            ))}
          </S.FilterMenuLeft>
        )}
        </>
  );
}

export { AuthorFilterMenu };