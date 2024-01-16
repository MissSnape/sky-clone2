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

//почему не работает плеер. В браузере указывает как ошибку 
function Player() {
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isRepeat = useSelector((store) => store.AudioPlayer.player.isRepeat);
  const tracks = useSelector((store) => store.AudioPlayer.trackList);
  const shuffledTrackList = useSelector((store) => store.AudioPlayer.shuffledTrackList);
  const currentTrack = useSelector((store) => store.AudioPlayer.currentTrack);
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
               <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 2V12.5" stroke="white"/>
<path d="M3 7L12.75 0.937823L12.75 13.0622L3 7Z" fill="#D9D9D9"/>
</svg>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="player__btn-play _btn">
              <S.PlayerBtnPlaySvg
                className="player__btn-play-svg"
                alt="play"
                onClick={playClick}
              >
                {playingStatus ? (
                  <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                ) : (
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                )}
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext className="player__btn-next">
              <S.PlayerBtnNextSvg
                className="player__btn-next-svg"
                alt="next"
                onClick={nextTrackToggle}
              >
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2V12.5" stroke="white"/>
<path d="M13 7L3.25 0.937823L3.25 13.0622L13 7Z" fill="#D9D9D9"/>
</svg>
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
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z" fill="#696969"/>
<path d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z" fill="#696969"/>
</svg>
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="player__btn-shuffle _btn-icon">
              <S.PlayerBtnShuffleSvg
                className="player__btn-shuffle-svg"
                alt="shuffle"
                onClick={shuffleToggle}
                $shuffleStatus={shuffleStatus}
              >
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 15L14.5 12.1132V17.8868L19.5 15ZM10.1632 12.0833L9.70863 12.2916L10.1632 12.0833ZM7.33683 5.91673L6.8823 6.12505L7.33683 5.91673ZM0.5 3.5H2.79151V2.5H0.5V3.5ZM6.8823 6.12505L9.70863 12.2916L10.6177 11.8749L7.79137 5.7084L6.8823 6.12505ZM14.7085 15.5H15V14.5H14.7085V15.5ZM9.70863 12.2916C10.6047 14.2466 12.5579 15.5 14.7085 15.5V14.5C12.949 14.5 11.3508 13.4745 10.6177 11.8749L9.70863 12.2916ZM2.79151 3.5C4.55105 3.5 6.14918 4.52552 6.8823 6.12505L7.79137 5.7084C6.89533 3.75341 4.94205 2.5 2.79151 2.5V3.5Z" fill="#696969"/>
<path d="M19.5 3L14.5 5.88675V0.113249L19.5 3ZM10.1632 5.91673L9.70863 5.7084L10.1632 5.91673ZM7.33683 12.0833L6.8823 11.8749L7.33683 12.0833ZM0.5 14.5H2.79151V15.5H0.5V14.5ZM6.8823 11.8749L9.70863 5.7084L10.6177 6.12505L7.79137 12.2916L6.8823 11.8749ZM14.7085 2.5H15V3.5H14.7085V2.5ZM9.70863 5.7084C10.6047 3.75341 12.5579 2.5 14.7085 2.5V3.5C12.949 3.5 11.3508 4.52552 10.6177 6.12505L9.70863 5.7084ZM2.79151 14.5C4.55105 14.5 6.14918 13.4745 6.8823 11.8749L7.79137 12.2916C6.89533 14.2466 4.94205 15.5 2.79151 15.5V14.5Z" fill="#696969"/>
</svg>
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>

          <S.PlayerTrackPlay className="player__track-play track-play">
            <S.TrackPlayContain className="track-play__contain">
              <S.TrackPlayImg className="track-play__image">
                <S.TrackPlaySvg className="track-play__svg" alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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

            <S.TrackPlaytrackLikDdis className="track-play__like-dis">
              <S.TrackPlaytrackLike className="track-play__like _btn-icon">
                <S.TrackPlaytracklikeSvg
                  className="track-play__like-svg"
                  alt="like"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackPlaytracklikeSvg>
              </S.TrackPlaytrackLike>
              <S.TrackPlaytrackDislike className="track-play__dislike _btn-icon">
                <S.TrackPlaytrackDislikeSvg
                  className="track-play__dislike-svg"
                  alt="dislike"
                >
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                </S.TrackPlaytrackDislikeSvg>
              </S.TrackPlaytrackDislike>
            </S.TrackPlaytrackLikDdis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock className="bar__volume-block volume">
          <S.VolumeContent className="volume__content">
            <S.VolumeImg className="volume__image">
              <S.VolumeSvg className="volume__svg" alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
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
