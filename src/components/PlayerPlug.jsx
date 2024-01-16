import React from "react";
import * as S from "./TracksPayerStyle";


function PlayerPlug() {
  return (
    <S.BarContent className="bar__content">
      <S.BarPlayerProgress className="bar__player-progress"></S.BarPlayerProgress>
      <S.BarPlayerBlock className="bar__player-block">
        <S.BarPlayer className="bar__player player">
          <S.PlayerControls className="player__controls">
            <S.PlayerBtnPrev className="player__btn-prev">
              <S.PlayerBtnPrevSvg className="player__btn-prev-svg" alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
              </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="player__btn-play _btn">
              <S.PlayerBtnPlaySvg className="player__btn-play-svg" alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
              </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext className="player__btn-next">
              <S.PlayerBtnNextSvg className="player__btn-next-svg" alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
              </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat className="player__btn-repeat _btn-icon">
              <S.PlayerBtnRepeatSvg className="player__btn-repeat-svg" alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
              </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle className="player__btn-shuffle _btn-icon">
              <S.PlayerBtnShuffleSvg className="player__btn-shuffle-svg" alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
              </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
          </S.PlayerControls>

          <S.PlayerTrackPlay className="player__track-play track-play">
            <S.TrackPlayContain className="track-play__contain">
            <img
              src="img/plug/playerPlug.svg"
              alt="plug"
            ></img>
            </S.TrackPlayContain>

            <S.TrackPlaytrackLikDdis className="track-play__like-dis">
              <S.TrackPlaytrackLike className="track-play__like _btn-icon">
                <S.TrackPlaytracklikeSvg className="track-play__like-svg" alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.TrackPlaytracklikeSvg>
              </S.TrackPlaytrackLike>
              <S.TrackPlaytrackDislike className="track-play__dislike _btn-icon">
                <S.TrackPlaytrackDislikeSvg className="track-play__dislike-svg" alt="dislike">
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
              <input
                className="volume__progress-line _btn"
                type="range"
                name="range"
              ></input>
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}

export { PlayerPlug };
