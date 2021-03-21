import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a857d696-87fc-45fc-872f-77d244031e1d'
    }
});