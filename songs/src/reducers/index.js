import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Backstreet Boys', duration: '2:07' },
        { title: 'All Star', duration: '3:45' },
        { title: 'Whatever', duration: '6:35' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

