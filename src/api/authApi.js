import {axiosInstance} from './axiosInstance';

export const AuthAPI = {
    getAuth() {
        return axiosInstance.get(`auth/me`);
    },
    login(userName, password, rememberMe = false, captcha) {
        return axiosInstance.post(`auth/login`, {
            email: userName,
            password: password,
            rememberMe: rememberMe,
            captcha: captcha
        });
    },
    logout() {
        return axiosInstance.delete(`auth/login`);
    },
    getCaptchaUrl() {
        return axiosInstance.get()
    }
}