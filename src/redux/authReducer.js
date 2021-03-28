import {AuthAPI} from '../api/authApi';
import {ProfileApi} from '../api/profileApi';

const SET_USER_DATA = 'SET_USER_DATE';
const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE';
const LOGIN_USER = 'LOGIN_USER';

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
                ...action.data,
                isAuth: true
            };
        case SET_CURRENT_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case LOGIN_USER:
            return  {
                ...state
            }
        default:
            return state;
    }
}

/************* ACTION CREATORS **************/
export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA, data: {userId, email, login}
})

export const setCurrentUserProfile = (profile) => ({
    type: SET_CURRENT_USER_PROFILE, profile
})

/************* THUNK CREATORS **************/
export const getAuthUserData = () => {
    return (dispatch) => {
        AuthAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                ProfileApi.getProfile(id).then(response => {
                    if (response) {
                        dispatch(setCurrentUserProfile(response.data));
                        dispatch(setAuthUserData(id, email, login));
                    }
                });
            }
        });
    }
}

export const loginUser = (userName, password, rememberMe, captcha) => {
    return (dispatch) => {
        AuthAPI.loginUser(userName, password, rememberMe, captcha).then(response => {
            if (response.data.resultCode === 0) {
                console.log(response.data)
            } else {
                console.error("Unable login user: "+response.data.messages);
            }
        })
    }
}

export default authReducer;