import {axiosInstance} from "./axiosInstance";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return axiosInstance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data;
            });
    },
    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}