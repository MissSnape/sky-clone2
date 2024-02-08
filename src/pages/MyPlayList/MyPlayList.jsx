//import { Player } from '../../components/TracsPlayer';
//import { SideBar } from '../../components/SideBar';
//import { Filters } from '../../components/filters';
import { Search } from '../../components/Search';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { PersonalUser } from '../../components/users';
//import { NavBurger } from '../../components/NavBurger';
import { TracsList } from '../../components/TracsList';
import { TrackListPlug } from '../../components/TrackListPlug';
//import { SideBarPlug } from '../../components/SideBarPlug';
import * as S from './MyPlayListStyle';
//import { useDispatch} from 'react-redux';
import React from 'react';
//import getTrackList from '../../api';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/actions/creators/skymusic';
import { useGetFavoritesTracksQuery } from '../../services/skymusic';
function MyPlayList() {
  const { data, error, isLoading } = useGetFavoritesTracksQuery();
  const dispatch = useDispatch();
  dispatch(setCurrentPage('myTracks'));

  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search />
        <S.CenterblockH2 className="centerblock__h2">Мои треки</S.CenterblockH2>
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {isLoading ? (
            <TrackListPlug />
          ) : error ? (
            /*Исправили ошибку  с отображением ошибки на странице*/ 
            <p>Что-то пошло не так, обновите страницу</p>
          ) : (
            <TracsList data={data} />
          )}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <PersonalUser />
      </S.MainSidebar>
    </>
  );
}

export default MyPlayList;
