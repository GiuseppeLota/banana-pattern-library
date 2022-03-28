import React from 'react'
import styles from './multileveldropdown.module.css'

export function Multileveldropdown({ lblClass, containerClass, id }) {

    const mouseLeaveFn = () => {
        document.getElementById(id).children[1].checked = false
    }

    return (
        <div className={containerClass} style={{ 'position': 'absolute' }} onMouseLeave={mouseLeaveFn} id={id}>
            <label htmlFor="lbl" className={`${styles.drp_label} ${lblClass} `}>
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
