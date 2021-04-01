import React from "react";
import styles from "./FormControl.module.css";

const FormControl = ({input, meta, ...props}) => {
    const isError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " "+ (isError ? styles.error : "")}>
            {props.children}
            {isError && <span className={styles.errorText}>{meta.error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child,  ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
