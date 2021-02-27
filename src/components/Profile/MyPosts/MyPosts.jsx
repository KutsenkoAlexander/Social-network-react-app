import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postElements =
        props.profilePage.posts.map(post => <Post id={post.id}
                                                  message={post.text}
                                                  likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <div className={styles.newPost}>
                <h3>New post</h3>
                <div className={styles.addPost}>
                    <textarea ref={newPostElement}
                              onChange={updateNewPostText}
                              value={props.profilePage.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;