import React from 'react';
import style from './MyPosts.module.css';
import Post from "./post/Post";

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
                <div className={style.app_posts}>
                    <Post message='Hi, how are you?' numberLikes='15'/>
                    <Post message='It is my first post'  numberLikes='20'/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;