import React from "react";
import styles from "./Post.module.css";

function Post() {
    return (
        <div className={styles.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU"/>
            <p>Post 1</p>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;