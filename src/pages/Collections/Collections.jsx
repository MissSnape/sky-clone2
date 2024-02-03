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
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/actions/creators/skymusic';
import * as S from './CollectionsStyles';
const Collections = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetSelectionCategoryQuery({id: params.id});
  
  const MassivCategory = [
    {
      id: 1,
      title: "Плейлист дня",
    },
    {
      id: 2,
      title: "100 хитов",
    },
    {
      id: 3,
      title: "Инди-заряд",
    },
  ];
  const category = MassivCategory.find(
    (categor) => categor.id === Number(params.id)
  );
  const dispatch = useDispatch();
  dispatch(setCurrentPage('Collections'));
  return (
    <>
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search/>
        <S.CenterblockH2 className="centerblock__h2">
        {category.title}
        </S.CenterblockH2>
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? <TrackListPlug /> : <TracsList data={data.items} />}
        </S.CenterblockContent>
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <PersonalUser />
      </S.MainSidebar>
    </>
  );
};

export default Collections;