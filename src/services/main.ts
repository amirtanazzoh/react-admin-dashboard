import axios from 'axios';

export const BASE_URL = 'https://lms-server-y1h9.onrender.com/';

export const appAxios = axios.create( {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
} );
