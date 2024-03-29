import React, { useRef, useEffect } from 'react'
import styles from './dropdown.module.css'

export function Dropdown({ title, items, id, rootClassName, liClassName, ulClassName, labelClassName }) {

    const divRef = useRef()

    useEffect(() => {
        const current = divRef.current

        current.getRootNode().addEventListener('click', (e) => {
            if (current.querySelector('#' + id).checked && e.srcElement.id !== id && e.srcElement.nodeName !== 'LABEL') {
                current.querySelector('#' + id).checked = false;
            }
        });

        current.addEventListener('click', (e) => {
            if (current.querySelector('#' + id).nextElementSibling.nextElementSibling.style.left === 0)
                current.querySelector('#' + id).checked = false;
        })

    }, [id])

    return (
        <div className={`dropdown ${styles.ui_dropdown} ${rootClassName}`} ref={divRef}>
            <input id={id} name="my-checkbox" type="checkbox" className={styles.drp_check} value="" />
            <label className={`${labelClassName}`} data-toggle="dropdown" htmlFor={id}>
                {title}
            </label>
            <ul className={`${ulClassName} ${styles.drp_ul}`}>
                {
                    items.map((elem, index) => {
                        return (<li className={`${styles.liBaseClassName} ${liClassName}`} key={index}>{elem}</li>)
                    })
                }
            </ul>
        </div>
    )
}
