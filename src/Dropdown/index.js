import React, { useRef, useEffect } from 'react'
import styles from './dropdown.module.css'

export default function Dropdown({ title, items, id, rootClassName, liClassName, ulClassName, labelClassName }) {

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
            <input id={id} name="my-checkbox" type="checkbox" value="" />
            <label className={`nav-link ${labelClassName}`} data-toggle="dropdown" htmlFor={id}>
                {title}
            </label>
            <ul className={ulClassName}>
                {
                    items.map((elem, index) => {
                        return (<li className={liClassName} key={index}>{elem}</li>)
                    })
                }
            </ul>
        </div>
    )
}
