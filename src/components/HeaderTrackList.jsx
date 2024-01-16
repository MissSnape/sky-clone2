import React from "react";
import * as S from './tracsStyle';
function TrackListHeader(){
  return (
    <S.ContentTitle className="content__title playlist-title">
      <S.PlaylistTitleCol1 className="playlist-title__col col01">Трек</S.PlaylistTitleCol1>
      <S.PlaylistTitleCol2 className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
      <S.PlaylistTitleCol3 className="playlist-title__col col03">АЛЬБОМ</S.PlaylistTitleCol3>
      <S.PlaylistTitleCol4 className="playlist-title__col col04">
        <S.PlaylistTitleSvg className="playlist-title__svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol4>
    </S.ContentTitle>
  );
}
export {TrackListHeader};