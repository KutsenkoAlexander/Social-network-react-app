import React from 'react';
import style from './Posts.module.css';
import Post from "./post/Post";

const Posts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', numberLikes: 15},
        {id: 2, message: 'This is my first post :)', numberLikes: 22}
    ];

    let postComponents = posts.map(p => <Post id={p.id} message={p.message} numberLikes={p.numberLikes}/>);

    return (
        <div className={style.posts}>
            <div className={style.new_post}>
                <h4>New post</h4>
                <div>
                    <div>
                        <textarea/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                <h4>My posts</h4>
                <div>
                    {postComponents}
                </div>
            </div>
        </div>
    );
};

export default Posts;