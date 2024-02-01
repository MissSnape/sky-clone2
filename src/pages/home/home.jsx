import React from 'react';
//import { Player } from '../../components/TracsPlayer';
import { SideBar } from '../../components/SideBar';
import { Filter } from '../../components/Filter';
import { Search } from '../../components/Search';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { PersonalUser } from '../../components/users';
//import { NavBurger } from '../../components/NavBurger';
import { TracsList } from '../../components/TracsList';
import { TrackListPlug } from '../../components/TrackListPlug';
import { SideBarPlug } from '../../components/SideBarPlug';
import * as S from './HomeStyles';
//import getTrackList from '../../api';
import { useDispatch } from 'react-redux';
import {setCurrentPage } from '../../store/actions/creators/skymusic';
import { useGetTracksQuery } from '../../services/skymusic';

import { useEffect, useState } from 'react';

function Home() {
  const { data, error, isLoading } = useGetTracksQuery();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const [authorFilterArray, setAuthorFilterArray] = useState([]);
  const [genreFilterArray, setGenreFilterArray] = useState([]);
  const [yearSortValue, setYearSortValue] = useState('base');
  dispatch(setCurrentPage('home'));
  const [filteredTracks, setFilteredTracks] = useState([]);
  console.log(yearSortValue);
  useEffect(() => {
    if (isLoading) {
      return;
    } else {
      let filterByAuthor = [];
      let filterByAuthorAndGenre = [];
      let filterByAuthorAndGenreAndSearch = [];
      let filterByAuthorAndGenreAndSearchAndSort = [];
      console.log(authorFilterArray);
      console.log(authorFilterArray > 0);
      authorFilterArray.length > 0
        ? (filterByAuthor = data.filter((el) =>
            authorFilterArray.includes(el.author),
          ))
        : (filterByAuthor = data);
      genreFilterArray.length > 0
        ? (filterByAuthorAndGenre = filterByAuthor.filter((el) =>
            genreFilterArray.includes(el.genre),
          ))
        : (filterByAuthorAndGenre = filterByAuthor);
      filterByAuthorAndGenreAndSearch = filterByAuthorAndGenre.filter((el) => {
        return el.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      switch (yearSortValue) {
        case 'base':
          filterByAuthorAndGenreAndSearchAndSort =
            filterByAuthorAndGenreAndSearch;
          break;
        case 'new':
          filterByAuthorAndGenreAndSearchAndSort =
            filterByAuthorAndGenreAndSearch.sort(function (a, b) {
              return new Date(b.release_date) - new Date(a.release_date);
            });
          break;
        case 'old':
          filterByAuthorAndGenreAndSearchAndSort =
            filterByAuthorAndGenreAndSearch.sort(function (a, b) {
              return new Date(a.release_date) - new Date(b.release_date);
            });
          break;
        default:
          break;
      }
      setFilteredTracks(filterByAuthorAndGenreAndSearchAndSort);
    }
  }, [isLoading, searchValue, authorFilterArray, genreFilterArray, yearSortValue, data]);

  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search setSearchValue={setSearchValue} />
        <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
        {isLoading ? null : (
          <Filter
            data={data}
            setAuthorFilterArray={setAuthorFilterArray}
            setGenreFilterArray={setGenreFilterArray}
            authorFilterArray={authorFilterArray}
            genreFilterArray={genreFilterArray}
            setYearSortValue={setYearSortValue}
            yearSortValue={yearSortValue}
          />
        )}
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? (
            <TrackListPlug />
          ) : filteredTracks.length > 0 ? (
            <TracsList data={filteredTracks} />
          ) : (
            <p>Треки не найдены</p>
          )}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <PersonalUser />
        {isLoading ? <SideBarPlug /> : <SideBar />}
      </S.MainSidebar>
    </>
  );
}

export default Home;
