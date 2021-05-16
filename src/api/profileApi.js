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
    },
    saveAvatar(avatar) {
        const formData = new FormData();
        formData.append("image", avatar);
        return axiosInstance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
    }
}