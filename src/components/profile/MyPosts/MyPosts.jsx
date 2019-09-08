import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <h4>New post</h4>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <h4>My posts</h4>
                <div className={styles.app_posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;