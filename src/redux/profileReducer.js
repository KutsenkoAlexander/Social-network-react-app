import {ProfileApi} from "../api/profileApi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, text: 'Hello World!', likeCount: 10},
        {id: 2, text: 'It\'s second post.', likeCount: 3}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let id = state.posts.length + 1;
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: id, text: text, likeCount: 0}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

/************* ACTION CREATORS **************/
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

/************* THUNK CREATORS **************/
export const getUserProfile = (userId) => {
    return (dispatch) => {
        ProfileApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

export default profileReducer;