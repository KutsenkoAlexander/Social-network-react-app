import React from "react";
import styles from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={styles.friend}>
            <img src={props.avatar} alt={'avatar'}/>
            <p>{props.name}</p>
        </div>
    );
}

export default Friend;