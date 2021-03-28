import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import NewPostForm from "./NewPostForm";

const MyPosts = (props) => {
    let postElements =
        props.posts.map(post => <Post id={post.id}
                                      key={post.id}
                                      message={post.text}
                                      likeCount={post.likeCount}/>)

    return (
        <div>
            <div className={styles.newPost}>
                <h3>New post</h3>
                <NewPostForm addPost={props.addPost}/>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;