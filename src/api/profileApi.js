import {axiosInstance} from './axiosInstance';

export const ProfileApi = {
    getProfile(id) {
        return axiosInstance.get(`profile/${id}`);
    }
}