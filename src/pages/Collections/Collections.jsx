//import { Player } from '../../components/TracsPlayer';
//import { SideBar } from '../../components/SideBar';
//import { Filters } from '../../components/filters';
import { Search } from '../../components/Search';
import { TrackListHeader } from '../../components/HeaderTrackList';
import { PersonalUser } from '../../components/users';
//import { NavBurger } from '../../components/NavBurger';
//import { TracsList } from '../../components/TracsList';
//import { TrackListPlug } from '../../components/TrackListPlug';
//import { SideBarPlug } from '../../components/SideBarPlug';
//import getTrackList from '../../api';
import { useDispatch } from 'react-redux';
import {setCurrentPage } from '../../store/actions/creators/skymusic';
import { useGetSelectionCategoryQuery } from '../../services/skymusic';
import * as S from './CollectionsStyles';
//import { useDispatch} from 'react-redux';
import React from 'react';
import { useParams } from 'react-router-dom';
//import getTrackList from '../../api';
function Collection()  {
  const params = useParams();
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
  //const { data,  isLoading } = useGetTracksQuery();
  const dispatch = useDispatch();
  dispatch(setCurrentPage('Collections'));
  const {data=[]} = useGetSelectionCategoryQuery({id:params.id});
  console.log({id:params.id})
  return (
    <>
           
      <S.MainCenterblock className="main__centerblock centerblock">
        <Search />
        <S.CenterblockH2 className="centerblock__h2">{category.title}</S.CenterblockH2>
        
        <S.CenterblockContent className="centerblock__content">
          <TrackListHeader />
          {/* {error ? <p>Не удалось загрузить данные</p> : null} */}
          {/* {isLoading ? <TrackListPlug /> : <TracsList data={data} />} */}
        </S.CenterblockContent>
        {data.items?.map((item)=>{
          return(
            <>
            <div>
              {item.id}
            </div>
            </>
          )
        })}
      </S.MainCenterblock>
      <S.MainSidebar className="main__sidebar sidebar">
        <PersonalUser />
        {/* {isLoading ? <SideBarPlug /> : <SideBar />} */}
      </S.MainSidebar>
      </>
  );
}

export default Collection;