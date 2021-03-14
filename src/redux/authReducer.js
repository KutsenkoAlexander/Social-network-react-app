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

export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA, data: {userId, email, login}
})

export const setCurrentUserProfile = (profile) => ({
    type: SET_CURRENT_USER_PROFILE, profile
})

export default authReducer;