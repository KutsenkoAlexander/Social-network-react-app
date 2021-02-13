import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post id={post.id}
                                                     message={post.text}
                                                     likeCount={post.likeCount}/>)
    return (
        <div>
            <div className={styles.newPost}>
                <h3>New post</h3>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;