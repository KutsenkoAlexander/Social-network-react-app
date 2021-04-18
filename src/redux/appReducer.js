import {getAuthUserData} from "./authReducer";

const SET_INIT_SUCCESS = 'SET_INIT_SUCCESS';

let initialState = {
    init: false
}

let initFlag = false;

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT_SUCCESS:
            return {
                ...state,
                init: true
            };
        default:
            return state;
    }
}

/************* ACTION CREATORS **************/
export const setInitApp = () => ({type: SET_INIT_SUCCESS})

/************* THUNK CREATORS **************/
export const initApp = () => (dispatch) => {
    if (!initFlag) {
        let dispatchResult = dispatch(getAuthUserData());
        Promise.all([dispatchResult]).then((e) => {
            dispatch(setInitApp());
            initFlag = true;
        });
    }
}

export default authReducer;