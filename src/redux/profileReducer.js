import {ProfileApi} from '../api/profileApi';

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profile/SET_STATUS';
const DELETE_POST = 'social-network/profile/DELETE_POST';

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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id === action.postId)
            }
        default:
            return state;
    }
};

/************* ACTION CREATORS **************/
export const addPost = (text) => ({type: ADD_POST, text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

/************* THUNK CREATORS **************/
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await ProfileApi.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (id) => async (dispatch) => {
    let response = await ProfileApi.getUserStatus(id);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileApi.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;