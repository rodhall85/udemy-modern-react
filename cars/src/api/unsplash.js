import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 678eb897b14bddf9aeef42b40b1a4c767e2a126944f602c94abd0b8272c5ef26'
    }
});

