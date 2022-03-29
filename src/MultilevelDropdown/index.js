import React from 'react'
import styles from './multileveldropdown.module.css'

export function Multileveldropdown({ lblClass, containerClass, id, label, items }) {

    const mouseLeaveFn = () => {
        document.getElementById(id).children[1].checked = false
    }

    return (
        <div className={containerClass} style={{ 'position': 'absolute' }} onMouseLeave={mouseLeaveFn} id={id}>
            <label htmlFor={`lbl${id}`} className={`${styles.drp_label} ${lblClass} `}>
                {label}
            </label>
            <input type="checkbox" id={`lbl${id}`}/>
            <ul>
                {
                    items.map(item => {
                        return (<li key={item.code}>
                            <a> {item.label}</a>
                            <ul>
                                {
                                    item.subItems.map(subItem => {
                                        return (
                                            <li key={subItem.code}>
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
