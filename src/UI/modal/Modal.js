import React from 'react'
import styles from './Modal.module.scss'

export const Modal = ({children, visible, setVisible}) => {

    const arrayModal = [styles.myModal]

    if(visible) {
        arrayModal.push(styles.active)
    }

    return (
        <div className={arrayModal.join(' ')} onClick={() => setVisible(!visible)}>
            <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
