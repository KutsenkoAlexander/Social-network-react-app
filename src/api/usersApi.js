import {axiosInstance} from './axiosInstance';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`, {});
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`);
    }
}