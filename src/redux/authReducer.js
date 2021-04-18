import {AuthAPI} from '../api/authApi';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATE';
const SET_CURRENT_USER_PROFILE = 'social-network/auth/SET_CURRENT_USER_PROFILE';
const LOGIN_USER = 'social-network/auth/LOGIN_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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

/************* THUNK CREATORS **************/
export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.getAuth();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginUser = (userName, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.login(userName, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        return response.data.messages[0];
    }
}

export const logoutUser = () => async (dispatch) => {
    let response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;