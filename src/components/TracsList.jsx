import React from "react";
import * as S from './tracsStyle';
import { useUserContext } from "../context/usercontext";
//import { tracks } from "../data";
import { useDispatch, useSelector } from 'react-redux';
import {
  crateTrackList,
  setCurrentTrack,
} from '../store/actions/creators/skymusic';
import { currentTrackIdSelector } from '../store/selectors/skymusic';
import { useAddLikeMutation, useRemoveLikeMutation } from '../services/skymusic';
import { setLike } from "../store/actions/creators/skymusic";

function TracsList({ data }) {
  const playingStatus = useSelector((store) => store.AudioPlayer.playing);
  const currentTrackId = useSelector(currentTrackIdSelector);
  const pageType = useSelector((store) => store.AudioPlayer.currentPage);
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const {currentUser} = useUserContext();
  const userId = currentUser.id;
  
  const dispatch = useDispatch();
  function hendelRemoveLike(track) {
    removeLike(track.id)
    dispatch(setLike(track))
  }
  function hendelAddLike(track) {
    addLike(track.id)
    dispatch(setLike(track))
  }
  return (
   
    <S.ContentPlaylist className="content__playlist playlist">
       {console.log(data)}
       {console.log('userID', userId)}

    {data.map((track) => {
      track = {...track, isLiked:track.stared_user?.some(user=>user.id === userId)}
     return  <S.PlaylistItem key={track.id} className="playlist__item">
        {console.log('trackId', track.id)}
        {console.log('currentTrackId', currentTrackId)}
        <S.PlaylistTrack className="playlist__track track">
          <S.TrackTitle
            className="track__title"
            onClick={() => {
              dispatch(setCurrentTrack(track));
              dispatch(crateTrackList(data));
            }}
          >
            <S.TrackTitleImg className="track__title-image">
              <S.TrackTitleSvg
                className={`${
                  playingStatus && track.id === currentTrackId
                    ? 'track__title-svg pulse-point'
                    : 'track__title-svg'
                }`}
                alt="music"
              >
                {track.id === currentTrackId ? (
                  <use xlinkHref="/img/icon/sprite.svg#pulse-point"></use>
                ) : (
                  <use href="/img/icon/sprite.svg#icon-note"></use>
                )}
              </S.TrackTitleSvg>
            </S.TrackTitleImg>
            <div className="track__title-text">
              <S.TrackTitleLink className="track__title-link">
                {track.name}{' '}
                <S.TrackTitleSpan className="track__title-span"></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
          <S.TrackAuthor className="track__author">
            <S.TrackAuthorLink className="track__author-link">
              {track.author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum className="track__album">
            <S.TrackAlbumLink className="track__album-link">
              {track.album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <div className="track__time">
             <S.TrackTimeSvg
              className="track__time-svg"
              alt="time"
              onClick={() => {
                pageType === 'myTracks' 
               
                  ? hendelRemoveLike(track)
                  :  track.stared_user?.find((user) => user['id']=== userId)
             
                  ? hendelRemoveLike(track)
                  : hendelAddLike(track);
                
              }}
            
            >
              
              {pageType === 'myTracks'  ? (
                <use xlinkHref="img/icon/sprite.svg#icon-activ-like"></use>
              ) : track.stared_user?.find((user) => user['id'] === userId) 
              ? (

                <use xlinkHref="img/icon/sprite.svg#icon-activ-like"></use>
              ) : (
                
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              
              )}
              
            </S.TrackTimeSvg>
            <S.TrackTimeText className="track__time-text">
              {track.duration_in_seconds}
            </S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
})}
  </S.ContentPlaylist>
  );
}
export {TracsList};