import { useEffect, useRef, useState } from 'react';
import * as S from './TracksPayerStyle';
import React from 'react';
//import prev from '../../public/img/icon/prev.svg'
import {
  nextTrack,
  pauseTrack,
  playTrack,
  prevTrack,
  setRepeatState,
  shuffleTracks,
} from '../store/actions/creators/skymusic';
import { useDispatch, useSelector } from 'react-redux';
import { currentTrackIdSelector } from '../store/selectors/skymusic';
import { useAddLikeMutation, useRemoveLikeMutation } from '../services/skymusic';

//почему не работает плеер. В браузере указывает как ошибку 
function Player() {
  const [addLike] = useAddLikeMutation();
  const [removeLike] = useRemoveLikeMutation();
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isRepeat = useSelector((store) => store.AudioPlayer.player.isRepeat);
  const tracks = useSelector((store) => store.AudioPlayer.trackList);
  const shuffledTrackList = useSelector((store) => store.AudioPlayer.shuffledTrackList);
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
  const [isLiked, setIsLiked] = useState(currentTrack.isLiked);
  const playingStatus = useSelector((store) => store.AudioPlayer.playing);
  const shuffleStatus = useSelector((store) => store.AudioPlayer.shuffled);
  const audioComponentRef = useRef(null);
  const getCurrentTrackList = () => {
    if (shuffleStatus === false) {
      return tracks;
    } else {
      return shuffledTrackList;
    }
  };
  const currentTrackList = getCurrentTrackList();
  const currentTrackId = useSelector(currentTrackIdSelector);
  const currentTrackIndex = currentTrackList.findIndex(
    (currentTrack) => currentTrack.id === currentTrackId,
  );
  const dispatch = useDispatch();
 useEffect(()=> {
setIsLiked(currentTrack.isLiked)

 },[currentTrack])

  const nextTrackToggle = () => {
    if (currentTrackIndex < tracks.length - 1) {
      dispatch(nextTrack(currentTrackList[currentTrackIndex + 1]));
      dispatch(playTrack(true));
    } else {
      console.log('Exit from if else');
    }
  };
  const prevTrackToggle = () => {
    if (currentTime < 5) {
      if (currentTrackIndex >= 1) {
        dispatch(prevTrack(currentTrackList[currentTrackIndex - 1]));
        dispatch(playTrack(true));
      } else {
        console.log('Exit from if else');
      }
    } else {
      const ref = audioComponentRef.current;
      ref.currentTime = 0;
    }
  };
  const playClick = () => {
    if (playingStatus) {
      audioComponentRef.current.pause();
      dispatch(pauseTrack(true));
    } else {
      audioComponentRef.current.play();
      dispatch(playTrack(true));
    }
  };
  const repeatClick = () => {
    audioComponentRef.current.loop = !isRepeat;
    dispatch(setRepeatState(!isRepeat));
  };
  const volumeOnChange = (event) => {
    const newVolume = audioComponentRef.current.volume;
    setVolume(newVolume);
    audioComponentRef.current.volume = event.target.value;
  };
  const timeOnChange = (event) => {
    audioComponentRef.current.currentTime = event.target.value;
  };

  const shuffleToggle = () => {
    if (shuffleStatus === false) {
      dispatch(shuffleTracks(true, [...tracks].sort(() => Math.random() - 0.5)));
    } else {
      dispatch(shuffleTracks(false, []));
    }
  };
  function handelLike() {
    addLike(currentTrack.id)
    console.log('click')
  }

  function handelRemoveLike() {
    removeLike(currentTrack.id)
     console.log('click')
   }
   function toggleLike() {
    if (isLiked){
      handelRemoveLike();
      setIsLiked(false)
      return;
    } 
    handelLike();
    setIsLiked(true)
    
   }
   console.log(isLiked)
  useEffect(() => {
    const ref = audioComponentRef.current;

    const timeUpdate = () => {
      if (ref.currentTime && ref.duration) {
        setCurrentTime(ref.currentTime);
        setDuration(ref.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    ref.addEventListener('timeupdate', timeUpdate);

    return () => {
      ref.removeEventListener('timeupdate', timeUpdate);
    };
  });
  useEffect (()=>
  {
    if(tracks.length && shuffleStatus){
    shuffleToggle();
    }
  }, [tracks])
  return (
    <S.BarContent className="bar__content">
      <S.Timer>
        {Math.trunc(currentTime / 60) < 10
          ? '0' + Math.trunc(currentTime / 60)
          : Math.trunc(currentTime / 60)}
        :
        {Math.trunc(currentTime % 60) < 10
          ? '0' + Math.trunc(currentTime % 60)
          : Math.trunc(currentTime % 60)}
        /
        {Math.trunc(duration / 60) < 10
          ? '0' + Math.trunc(duration / 60)
          : Math.trunc(duration / 60)}
        :
        {Math.trunc(duration % 60) < 10
          ? '0' + Math.trunc(duration % 60)
          : Math.trunc(duration % 60)}
      </S.Timer>
      <S.AudioComponent
        controls
        src={currentTrack.track_file}
        ref={audioComponentRef}
        autoPlay
        onEnded={() => nextTrackToggle()}
      ></S.AudioComponent>
      <S.StyledProgressInput
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={timeOnChange}
        $color="#ff0000"
      />
      <S.BarPlayerProgress className="bar__player-progress"></S.BarPlayerProgress>
      <S.BarPlayerBlock className="bar__player-block">
        <S.BarPlayer className="bar__player player">
          <S.PlayerControls className="player__controls">
            <S.PlayerBtnPrev className="player__btn-prev">
              <S.PlayerBtnPrevSvg
                className="player__btn-prev-svg"
                alt="prev"
                onClick={prevTrackToggle}
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="player__btn-play _btn">
              <S.PlayerBtnPlaySvg
                className="player__btn-play-svg"
                alt="play"
                onClick={playClick}
              >
                {playingStatus ? (
                  <use xlinkHref="/img/icon/sprite.svg#icon-pause"></use>
                ) : (
                  <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                )}
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext className="player__btn-next">
              <S.PlayerBtnNextSvg
                className="player__btn-next-svg"
                alt="next"
                onClick={nextTrackToggle}
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat
              className="player__btn-repeat _btn-icon"
              onClick={repeatClick}
            >
              <S.PlayerBtnRepeatSvg
                className="player__btn-repeat-svg"
                alt="repeat"
                $isRepeat={isRepeat}
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="player__btn-shuffle _btn-icon">
              <S.PlayerBtnShuffleSvg
                className="player__btn-shuffle-svg"
                alt="shuffle"
                onClick={shuffleToggle}
                $shuffleStatus={shuffleStatus}
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>

          <S.PlayerTrackPlay className="player__track-play track-play">
            <S.TrackPlayContain className="track-play__contain">
              <S.TrackPlayImg className="track-play__image">
                <S.TrackPlaySvg className="track-play__svg" alt="music">
                  <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </S.TrackPlaySvg>
              </S.TrackPlayImg>
              <S.TrackPlayAuthor className="track-play__author">
                <S.TrackPlayAuthorLink
                  className="track-play__author-link"
                  href="http://"
                >
                  {currentTrack.name}
                </S.TrackPlayAuthorLink>
              </S.TrackPlayAuthor>
              <S.TrackPlayAlbum className="track-play__album">
                <S.TrackPlayAlbumLink
                  className="track-play__album-link"
                  href="http://"
                >
                  {currentTrack.author}
                </S.TrackPlayAlbumLink>
              </S.TrackPlayAlbum>
            </S.TrackPlayContain>

            <S.TrackPlaytrackLikDdis className="track-play__like-dis" >
              <S.TrackPlaytrackLike className="track-play__like _btn-icon" >
                <S.TrackPlaytracklikeSvg
                  className="track-play__like-svg"
                  alt="like"
                  onClick={toggleLike}
                  
                >
                  <use xlinkHref={`/img/icon/sprite.svg${isLiked ? "#icon-activ-like" : "#icon-like"}`}></use>
                </S.TrackPlaytracklikeSvg>
              </S.TrackPlaytrackLike>
              {/* <S.TrackPlaytrackDislike className="track-play__dislike _btn-icon">
                 <S.TrackPlaytrackDislikeSvg
                  className="track-play__dislike-svg"
                  alt="dislike"
                  onClick={handelLike}
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </S.TrackPlaytrackDislikeSvg> 
              </S.TrackPlaytrackDislike> */}
            </S.TrackPlaytrackLikDdis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock className="bar__volume-block volume">
          <S.VolumeContent className="volume__content">
            <S.VolumeImg className="volume__image">
              <S.VolumeSvg className="volume__svg" alt="volume">
                <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
              </S.VolumeSvg>
            </S.VolumeImg>
            <S.VolumeProgress className="volume__progress _btn">
              <S.VolumeProgressLine
                className="volume__progress-line _btn"
                type="range"
                name="range"
                value={volume}
                min={0}
                max={1}
                step={0.01}
                onChange={volumeOnChange}
              ></S.VolumeProgressLine>
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}

export { Player };
