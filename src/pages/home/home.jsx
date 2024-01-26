import React, {useState} from 'react';

//import { Player } from '../../components/TracsPlayer';
import { SideBar } from '../../components/SideBar';
import { Filters } from '../../components/filters';
import { Search } from '../../components/Search';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { PersonalUser } from '../../components/users';
//import { NavBurger } from '../../components/NavBurger';
import { TracsList } from '../../components/TracsList';
import { TrackListPlug } from '../../components/TrackListPlug';
import { SideBarPlug } from '../../components/SideBarPlug';
import * as S from './appStyles';
//import getTrackList from '../../api';
import { useDispatch } from 'react-redux';
import {setCurrentPage } from '../../store/actions/creators/skymusic';
import { useGetTracksQuery } from '../../services/skymusic';

function Home() { 
  
  const [yearSortValue, setYearSortValue] = useState('base');
  const { data, error, isLoading } = useGetTracksQuery();
  const dispatch = useDispatch();
  dispatch(setCurrentPage('home'));
    return (
      <>
    
           
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search />
        <S.CenterblockH2 className="centerblock__h2">Треки</S.CenterblockH2>
        <Filters  data={data}
            setYearSortValue={setYearSortValue}
            yearSortValue={yearSortValue}/>
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {error ? <p>Не удалось загрузить данные</p> : null}
          {isLoading ? <TrackListPlug /> : <TracsList data={data} />}
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