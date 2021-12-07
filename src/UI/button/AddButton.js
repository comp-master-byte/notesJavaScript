import React from 'react'
import styles from './AddButton.module.scss'

export const AddButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.myBtn}>
            {children}
        </button>
    )
}
