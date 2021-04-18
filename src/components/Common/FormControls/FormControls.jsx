import React from 'react';
import styles from './FormControl.module.css';

const FormControl = ({meta: {error, touched}, children}) => {
    const isError = error && touched;
    return (
        <div className={styles.formControl + " "+ (isError ? styles.error : "")}>
            {children}
            {isError && <span className={styles.errorText}>{error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
