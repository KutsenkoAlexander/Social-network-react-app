import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.app_post}>
            <img src='https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/blond_boy_face_avatar-512.png'/>
            <p>{props.message}</p>
            <div className={styles.app_like}>
                <img src='https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Like-Icon-715x715.png'/><span>{props.numberLikes}</span>
            </div>
        </div>
    );
}

export default Post;