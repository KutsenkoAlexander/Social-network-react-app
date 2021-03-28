import {ProfileApi} from '../api/profileApi';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, text: 'Hello World!', likeCount: 10},
        {id: 2, text: 'It\'s second post.', likeCount: 3}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let id = state.posts.length + 1;
            let text = action.text;
            return {
                ...state,
                posts: [...state.posts, {id: id, text: text, likeCount: 0}]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        // case UPDATE_USER_STATUS:
        //     return {
        //         ...state
        //     }
        default:
            return state;
    }
};

/************* ACTION CREATORS **************/
export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

/************* THUNK CREATORS **************/
export const getUserProfile = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        ProfileApi.getUserStatus(id).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileApi.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;