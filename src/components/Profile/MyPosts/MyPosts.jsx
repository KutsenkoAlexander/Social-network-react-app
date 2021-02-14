import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements =
        props.posts.map(post => <Post id={post.id}
                                      message={post.text}
                                      likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div>
            <div className={styles.newPost}>
                <h3>New post</h3>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;