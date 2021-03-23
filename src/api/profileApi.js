import {axiosInstance} from './axiosInstance';

export const ProfileApi = {
    getProfile(id) {
        return axiosInstance.get(`profile/${id}`);
    },
    getUserStatus(id) {
        return axiosInstance.get(`profile/status/${id}`);
    },
    updateUserStatus(status) {
        return axiosInstance.put(`profile/status`, {status: status});
    }
}