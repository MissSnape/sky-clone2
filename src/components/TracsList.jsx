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
function TracsList({ data }) {
  const playingStatus = useSelector((store) => store.AudioPlayer.playing);
  const currentTrackId = useSelector(currentTrackIdSelector);
  const pageType = useSelector((store) => store.AudioPlayer.currentPage);
  const [addLike, {isLoading}] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const {currentUser} = useUserContext();
  const userId = currentUser?.id;
  
  const dispatch = useDispatch();
  return (
   
    <S.ContentPlaylist className="content__playlist playlist">
 

    {data.map((track) => (
      
      <S.PlaylistItem key={track.id} className="playlist__item">
        
        <S.PlaylistTrack className="playlist__track track">
          <S.TrackTitle
            className="track__title"
            onClick={() => {
              {console.log('trackId', track.id)}
        {console.log('currentTrackId', currentTrackId)}
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
                {track.id === currentTrackId+1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#B672FF"/>
                </svg> 
                
 ) : (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 16V1.9697L19 1V13" stroke="#4E4E4E"/>
  <ellipse cx="4.5" cy="16" rx="3.5" ry="2" stroke="#4E4E4E"/>
  <ellipse cx="15.5" cy="13" rx="3.5" ry="2" stroke="#4E4E4E"/>
  </svg>          
     )}          

                {/* {track.id === currentTrackId ? (
                  <use xlinkHref="/img/icon/sprite.svg#pulse_point"></use>
                ) : (
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                )} */}
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
               
                  ? removeLike(track.id)
                  : pageType === 'home' || track.stared_user?.find((user) => user['id']=== userId)
                  {isLoading
                  ? removeLike(track.id)
                  :  addLike(track.id);
                }
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
    ))}
  </S.ContentPlaylist>
  );
}
export {TracsList};