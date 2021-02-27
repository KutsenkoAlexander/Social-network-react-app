import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPostContainer={addPost}
                    updataNewPostTextContainer={updateNewPostText}
    />;
}

export default MyPostsContainer;