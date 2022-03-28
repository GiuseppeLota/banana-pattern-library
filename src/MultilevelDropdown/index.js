import React from 'react'
import styles from './multileveldropdown.module.css'

export function Multileveldropdown({ lblClass }) {
    return (
        <div className={styles.drp_container}>
            <label htmlFor="lbl" className={lblClass}>
                label
            </label>
            <input type="checkbox" id="lbl" />
            <ul>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a>
                    <ul>
                        <li><a href="#">Resets</a></li>
                        <li><a href="#">Grids</a></li>
                        <li><a href="#">Frameworks</a></li>
                    </ul>
                </li>
                <li><a href="#">JavaScript</a>
                    <ul>
                        <li><a href="#">Ajax</a></li>
                        <li><a href="#">jQuery</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
