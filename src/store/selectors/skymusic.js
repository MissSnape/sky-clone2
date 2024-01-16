const audioPlayerSelector = (store) => store.AudioPlayer;

export const currentTrackIdSelector = (store) => 
  audioPlayerSelector(store)?.currentTrack.id || {};

