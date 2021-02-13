import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id: 1, text: 'Hello World!', likeCount: 10},
        {id: 2, text: 'It\'s second post.', likeCount: 3}
    ];

    return (
        <div>
            <div>
                <div className={styles.newPost}>
                    <h3>New post</h3>
                    <div><textarea/></div>
                    <div><button>Add post</button></div>
                </div>
                <div className={styles.posts}>
                    {
                        posts.map(post => <Post id={post.id} message={post.text} likeCount={post.likeCount} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default MyPosts;