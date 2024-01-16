import {
  CREATE_TRACK_LIST,
  NEXT_TRACK,
  PAUSE,
  PLAY,
  PREV_TRACK,
  SET_CURRENT_PAGE,
  SET_CURRENT_TRACK,
  SET_REPEAT_STATE,
  TOGGLE_SHUFFL,
} from '../actions/types/skymusic';

const initialState = {
  trackList: [],
  currentTrack: {},
  playing: false,
  shuffled: false,
  shuffledTrackList: [],
  currentPage: 'home',
  player: { isRepeat: false, volume: 1, currentTime: 0, duration: 0 },
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TRACK_LIST: {
      const { trackList } = action.payload;
      return {
        ...state,
        trackList,
      };
    }
    case SET_CURRENT_TRACK: {
      const { currentTrack } = action.payload;
      return {
        ...state,
        playing: true,
        currentTrack,
      };
    }
    case PLAY: {
      const { trackStatus } = action.payload;
      return {
        ...state,
        playing: trackStatus,
      };
    }
    case PAUSE: {
      const { trackStatus } = action.payload;
      return {
        ...state,
        playing: !trackStatus,
      };
    }

    case NEXT_TRACK: {
      const { track } = action.payload;
      return {
        ...state,
        currentTrack: track,
      };
    }

    case PREV_TRACK: {
      const { track } = action.payload;
      return {
        ...state,
        currentTrack: track,
      };
    }
    case TOGGLE_SHUFFL: {
      const { isShuffled, shuffledTrackList } = action.payload;
      return {
        ...state,
        shuffled: isShuffled,
        shuffledTrackList,
      };
    }
    case SET_REPEAT_STATE: {
      const { isRepeat } = action.payload;
      return {
        ...state,
        player:{isRepeat: isRepeat},
      };
    }
    case SET_CURRENT_PAGE: {
      const { pageType } = action.payload;
      return {
        ...state,
        currentPage: pageType,
      };
    }
    default:
      return state;
  }
}
