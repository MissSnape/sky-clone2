// import { tracks } from '../../data';
import { useState } from 'react';
import * as S from './FilterStyles';
import { useEffect } from 'react';
import React from 'react';
function AuthorFilterMenu({
  toggleVisibility,
  whatVisible,
  tracks,
  setAuthorFilterArray,
  authorFilterArray,
}) {
  const [authorArray, setAuthorArray] = useState(null);
  useEffect(() => {
    const uniqueAuthors = new Set(tracks.map((track) => track.author));
    setAuthorArray(Array.from(uniqueAuthors));
  }, []);
  console.log(authorArray);
  // console.log(authorFilterArray);
  const filterToggle = (author) => {
    if (authorFilterArray.includes(author)) {
      setAuthorFilterArray(
        [...authorFilterArray].filter((el) => el !== author),
      );
    } else {
      setAuthorFilterArray([...authorFilterArray, author]);
    }
  };

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
      {authorFilterArray.length > 0 && (
        <div className="filter_point_author">
          <p className="filter_point__text">{authorFilterArray.length}</p>{' '}
        </div>
      )}
      {whatVisible === 'author' && (
        <S.FilterMenuLeft className="filter__menu filter__menu_left">
          {authorArray.map((author, index) => (
            <S.FilterMenuItem
              key={index}
              className={
                'filter__menu_item' +
                `${
                  authorFilterArray.includes(author) &&  ' filter__button_clicked'
                }`
              }
              onClick={(e) => {
                e.stopPropagation();
                filterToggle(author);
              }}
            >
              {author}
            </S.FilterMenuItem>
          ))}
        </S.FilterMenuLeft>
      )}
    </>
  );
}

export { AuthorFilterMenu };
