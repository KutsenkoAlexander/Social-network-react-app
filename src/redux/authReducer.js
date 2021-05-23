import {AuthAPI} from '../api/authApi';
import {SecurityAPI} from "../api/securityApi";

const SET_USER_DATA = 'social-network/auth/SET_USER_DATE';
const SET_CURRENT_USER_PROFILE = 'social-network/auth/SET_CURRENT_USER_PROFILE';
const LOGIN_USER = 'social-network/auth/LOGIN_USER';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case SET_CURRENT_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case LOGIN_USER:
            return {
                ...state
            }
        default:
            return state;
    }
}

/************* ACTION CREATORS **************/
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
})

export const setCurrentUserProfile = (profile) => ({
    type: SET_CURRENT_USER_PROFILE, profile
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})
/************* THUNK CREATORS **************/
export const getAuthUserData = () => async (dispatch) => {
    const response = await AuthAPI.getAuth();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginUser = (userName, password, rememberMe, captcha) => async (dispatch) => {
    const response = await AuthAPI.login(userName, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        return response.data.messages[0];
    }
}

export const logoutUser = () => async (dispatch) => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer;