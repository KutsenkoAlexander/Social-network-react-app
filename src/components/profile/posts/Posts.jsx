import React from 'react';
import style from './Posts.module.css';
import Post from "./post/Post";

const Posts = () => {
    return (
        <div className={style.posts}>
            <div className={style.new_post}>
                <h4>New post</h4>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                <h4>My posts</h4>
                <div>
                    <Post message='Hi, how are you?' numberLikes='15'/>
                    <Post message='This is my first post :)' numberLikes='20'/>
                </div>
            </div>
        </div>
    );
}

export default Posts;