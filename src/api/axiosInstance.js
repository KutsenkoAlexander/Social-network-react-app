import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '63008887-d0f6-4107-b2fb-254b9d98afbf'
    }
});