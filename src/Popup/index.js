import React, { useRef, useEffect } from 'react'
import styles from './popup.module.css'

export default function Popup({ TriggerButton, Body, Title, id, closeFn }) {

    const closeBtn = useRef();

    useEffect(() => {
        if (closeFn) {
            closeBtn.current.addEventListener("click", closeFn);
        }
        
    }, []);


    return (
        <div className={styles.pop}>
            <label htmlFor={id} className={styles.open}>{TriggerButton}</label>
            <input type="checkbox" id={id} />
            <div className={styles.modal}>
                <div className={styles.modal_inner}>
                    {Title}
                    {Body}
                    <label ref={closeBtn} className={styles.btn_close} htmlFor={id}>X</label>
                </div>
            </div>
        </div>
    )
}

export const closePopup = (id) => {
    document.getElementById(id).checked = false
}
