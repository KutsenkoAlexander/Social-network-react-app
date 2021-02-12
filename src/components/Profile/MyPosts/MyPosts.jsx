import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <div className={styles.newPost}>
                    <h3>New post</h3>
                    <div><textarea/></div>
                    <div><button>Add post</button></div>
                </div>
                <div className={styles.posts}>
                    <Post message="Hello World!" likeCount="10"/>
                    <Post message="It's second post." likeCount="1"/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;