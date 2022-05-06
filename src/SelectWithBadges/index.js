import React, { useState, useEffect, Fragment } from 'react'
import styles from './selectwithbadges.module.css'


export function SelectWithBadges(props) {

    const register = props.registerFn
    const setValue = props.setValueFn

    const [elements, setElements] = useState([])

    useEffect(() => {
        if (props.value) {
            const selectedValues = props.value.map(val => { return { value: val, id: props.items.find(it => it.value === val).id } })

            setValue(props.name, selectedValues[props.value.length - 1])
            setElements(selectedValues)
        }
    }, [])

    function addElement(e) {
        const id = e.target.value

        const selectedIndex = e.target.selectedIndex
        const value = e.target.options[selectedIndex].innerHTML

        if (elements.indexOf(value) === -1) {
            setElements([{ id, value }, ...elements])
        }
    }

    function removeElement(e) {
        const updatedElements = JSON.parse(JSON.stringify(elements))

        const valueToDelete = e.target.parentElement.lastChild.innerText

        updatedElements.splice(updatedElements.indexOf(valueToDelete), 1)

        setElements(updatedElements)
    }

    useEffect(() => {
        setValue(props.name, elements[0]?.id ?? "default")
    }, [elements])

    return (
        <>
            <select className="form-select" defaultValue={'default'} {...register(props.name, { required: props.required, setValueAs: () => elements })} onChange={(e) => addElement(e)}>
                <option value={'default'} disabled>
                    {'Choose an option'}
                </option>
                {
                    props.items.map(item => {
                        return <option key={item.id} value={item.id}>{item.value}</option>
                    })
                }
            </select>
            <div className={`${styles.badges_container} col-sm-4`}>
                {
                    elements.map((elem, index) => {
                        return (<span key={index} className="badge rounded-pill bg-primary position-relative">
                            <span onClick={removeElement} className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.bg_delete_cat}`}>
                                X
                                <span className="visually-hidden">delete element</span>
                            </span>
                            <span>{elem.value}</span>
                        </span>)
                    })
                }
            </div>
        </>
    )
}
