import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData = [
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
                    <Post id={postData[0].id}
                          message={postData[0].text}
                          likeCount={postData[0].likeCount}
                    />
                    <Post id={postData[1].id}
                          message={postData[1].text}
                          likeCount={postData[1].likeCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default MyPosts;