//import {  useState } from 'react';
import React from 'react';
import { Search } from '../../components/Search';
//import { Filters } from '../../components/filters';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { TracsList } from '../../components/TracsList';
import { TrackListPlug } from '../../components/TrackListPlug';
import {PersonalUser} from '../../components/users'
import { useGetSelectionCategoryQuery} from '../../services/skymusic';
import { useParams } from 'react-router-dom';
import * as S from './CollectionsStyles';
const Collections = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetSelectionCategoryQuery({id: params.id});
  
  let listName = '';
  let collectionsData = [];
  if (!isLoading & data) {
    switch (params.id) {
      case '1':
        listName = 'Классическая музыка';
        collectionsData = data.items.filter((track) => track.genre === listName);
        break;
      case '2':
        listName = 'Электронная музыка';
        collectionsData = data.items.filter((track) => track.genre === listName);
        break;
      case '3':
        listName = 'Рок музыка';
        collectionsData = data.items.filter((track) => track.genre === listName);
        break;
      default:
        break;
    }
  }
  
  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search/>
        <S.CenterblockH2 className="centerblock__h2">
          {listName}
        </S.CenterblockH2>
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? <TrackListPlug /> : <TracsList data={collectionsData} />}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <PersonalUser />
      </S.MainSidebar>
    </>
  );
};

export default Collections;