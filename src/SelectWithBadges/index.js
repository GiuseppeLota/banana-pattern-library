import React, { useState, useEffect } from 'react'
import styles from './selectwithbadges.module.css'


export function SelectWithBadges(props) {

    const register = props.registerFn
    const setValue = props.setValueFn

    const [elements, setElements] = useState([])

    useEffect(() => {
        if (props.value) {
            setValue(props.name, props.value[props.value.length -1])
            setElements(props.value)
        }
    }, [])

    function addElement(e) {
        const value = e.target.value
        if (elements.indexOf(value) === -1) {
            setElements([e.target.value, ...elements])
        }
    }

    function removeElement(e) {
        const updatedElements = JSON.parse(JSON.stringify(elements))

        const valueToDelete = e.target.parentElement.lastChild.innerText

        updatedElements.splice(updatedElements.indexOf(valueToDelete), 1)
        
        setElements(updatedElements)
    }

    useEffect(() => {
        setValue(props.name, elements[0])
    }, [elements])

    return (
        <>
            <select className="form-select" aria-label="Default select example" defaultValue="" {...register(props.name, { required: props.required, setValueAs: () => elements })} onChange={(e) => addElement(e)}>
                <option value=""></option>
                {
                  props.items.map(item =>{
                      return <option key={item.id} value={item.value}>{item.value}</option>
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
                            <span>{elem}</span>
                        </span>)
                    })
                }
            </div>
        </>
    )
}
