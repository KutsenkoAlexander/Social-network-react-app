import {axiosInstance} from './axiosInstance';

export const SecurityAPI = {
    getCaptchaUrl() {
        return axiosInstance.get(`security/get-captcha-url`);
    }
};