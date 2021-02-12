import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog + ' ' + styles.active}>Bob</div>
                <div className={styles.dialog}>Marty</div>
                <div className={styles.dialog}>Tom</div>
                <div className={styles.dialog}>Ben</div>
                <div className={styles.dialog}>Barbara</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hi!</div>
                <div className={styles.message}>Morning!</div>
                <div className={styles.message}>Yo!</div>
            </div>
        </div>
    );
}

export default Dialogs;