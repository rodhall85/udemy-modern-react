import axios from 'axios';

const KEY = 'AIzaSyA3Pz_hyMuDKns_E3n08hpsosHwTLZkrT0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});