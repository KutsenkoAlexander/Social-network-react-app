import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements =
        props.profilePage.posts.map(post => <Post id={post.id}
                                      message={post.text}
                                      likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let updateNewPostText = () => {
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            text: newPostElement.current.value
        };
        props.dispatch(action);
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