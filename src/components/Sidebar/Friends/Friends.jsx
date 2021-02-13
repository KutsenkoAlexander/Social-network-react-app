import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return (
        <div className={styles.friends}>
            {
                props.friends.map(friend => <Friend id={friend.id}
                                                    name={friend.name}
                                                    avatar={friend.avatar}/>)
            }
        </div>
    );
}

export default Friends;