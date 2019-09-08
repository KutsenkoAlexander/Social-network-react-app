import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.app_post}>
            <img src='https://cdn2.iconfinder.com/data/icons/social-media-2173/95/Network_Social_Instagram_Internet_Twitter_Facebook_30-512.png'/>
            <p>Post 1</p>
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;