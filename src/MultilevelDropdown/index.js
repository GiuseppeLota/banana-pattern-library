import React from 'react'
import styles from './multileveldropdown.module.css'

export function Multileveldropdown({ lblClass, containerClass, id, label, items }) {

    const mouseLeaveFn = () => {
        document.getElementById(id).children[1].checked = false
    }

    return (
        <div className={containerClass} onMouseLeave={mouseLeaveFn} id={id}>
            <label htmlFor={`lbl${id}`} className={`${styles.drp_label} ${lblClass} `}>
                {label}
            </label>
            <input type="checkbox" id={`lbl${id}`} />
            <ul className={styles.drp_ul}>
                {
                    items.map(item => {
                        return (
                            <li key={item.code}>
                                <a> {item.label}</a>
                                <ul className={styles.drp_ul}>
                                    {
                                        item.subItems.map(subItem => {

                                            const clickHandler = subItem.onClick ?? function () { }

                                            return (
                                                <li key={subItem.code} onClick={clickHandler}>
                                                    <a> {subItem.label}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>)
                    })
                }

            </ul>
        </div>
    )
}
