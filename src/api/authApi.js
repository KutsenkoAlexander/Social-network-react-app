import {axiosInstance} from './axiosInstance';

export const AuthAPI = {
    getAuth() {
        return axiosInstance.get(`auth/me`);
    },
    loginUser(userName, password, rememberMe, captcha) {
        return axiosInstance.post(`auth/login`, {
            email:userName,
            password:password,
            rememberMe:rememberMe,
            captcha:captcha});
    }
}