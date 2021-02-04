import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={styles.posts}>
                    <Post message="Hello World!" likeCount="10"/>
                    <Post message="It's second post." likeCount="1"/>
                    <Post message="Third message :)" likeCount="4"/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;