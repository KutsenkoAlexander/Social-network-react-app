import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let profilePage = store.getState().profilePage;

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let updateNewPostText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (<MyPosts posts={profilePage.posts}
                                 newPostText={profilePage.newPostText}
                                 addPostContainer={addPost}
                                 updataNewPostTextContainer={updateNewPostText}
                />);
            }
        }
    </StoreContext.Consumer>;
}

export default MyPostsContainer;