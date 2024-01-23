import React from "react";
import * as S from'./searchStyle';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilterTracks } from "../store/actions/creators/skymusic";

function Search() {
  const dispatch = useDispatch();
  const tracks = useSelector((store) => store.AudioPlayer.trackList);
  //const [searchText, setSearchText] = useState(null);
  const handleSearchText = (e) => {
    console.log(tracks);
    const value = e.target.value.toLowerCase();
    dispatch(setFilterTracks(value))
  };
    return(
      <S.CenterblockSearch className="centerblock__search search">
      <S.SearchSvg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(e)=>handleSearchText(e)}
      ></S.SearchText>
    </S.CenterblockSearch>
    )
    
}
export {Search};
//создать  inishial state  с переменной которая хранит в себе трэки для фильтра(записываем трэки по умолчанию)
//  при загрузки страницы помещаем в переменную все трэки
// создать  условия отображения трэков, если в переменной чтото есть то отображать отфлиртованные, иначе обычные