import styles from "./ProfileInfo.module.css";
import React from "react";

const ProfileContact = ({contactTitle, contactValue}) => {
    return <p><span className={styles.uppercaseParagraph}>{contactTitle}</span>: {contactValue}</p>
}
export default ProfileContact;