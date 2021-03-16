import {AuthAPI} from "../api/authApi";
import {ProfileApi} from "../api/profileApi";

const SET_USER_DATA = 'SET_USER_DATE';
const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE';

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
export const setAuth = () => {
    return (dispatch) => {
        AuthAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                ProfileApi.getProfile(id).then(data => {
                    if (data) {
                        dispatch(setCurrentUserProfile(data));
                        dispatch(setAuthUserData(id, email, login));
                    }
                });
            }
        });
    }
}

export default authReducer;