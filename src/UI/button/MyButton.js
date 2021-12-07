import React from 'react'
import styles from './MyButton.module.scss'

export const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.myBtn}>
            <span className={`${styles.myBtnLine} && ${styles.myBtnTop}`}></span>
            <span className={`${styles.myBtnLine} && ${styles.myBtnRight}`}></span>
            <span className={`${styles.myBtnLine} && ${styles.myBtnBottom}`}></span>
            <span className={`${styles.myBtnLine} && ${styles.myBtnLeft}`}></span>
            {children}
        </button>
    )
}
