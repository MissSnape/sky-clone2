import { SET_FILTER, SET_FILTER_TRACKS, SET_LIKE } from '../actions/types/skymusic';
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
  filterTracks: [],
  filters: {
    author:[],
    genre:[],

  },
  order: 'по умолчанию',
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
        filterTracks: trackList,
      };
    }
    case SET_FILTER_TRACKS:{
      const {query} = action.payload;
      let filterTracks = [...state.trackList];
      filterTracks = filterTracks.filter((track)=>track.author.toLowerCase().includes(query))
      return {
        ...state,
        filterTracks,
      }
    }
//     case SET_ORDER:{
//       const {order} =action.payload;
//       let orders ={...state.orders}
// if{}
//       return{
//         state,

//     }
//     }
    case SET_FILTER:{
      const{filter, value} = action.payload;
      let filters = {...state.filters};
      if(filters[filter].includes(value.toLowerCase())){
        filters[filter] = filters[filter].filter((el)=>
        el !== value.toLowerCase()
        ) 
        
      } else{
        filters[filter]= [...filters[filter], value.toLowerCase()]
      }
      filters = {...state.filters, [filter]: filters[filter]}
      return {
        ...state,
        filters,
      }
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
    case SET_LIKE:{
      const {track} = action.payload;
      return{
        ...state,
        currentTrack:{
          ...state.currentTrack, isLiked:track.id === state.currentTrack.id ? !track.isLiked : state.currentTrack.isLiked
        }
      }
    }
    default:
      return state;
  }
}
