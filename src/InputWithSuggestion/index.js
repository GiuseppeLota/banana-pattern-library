import React, { useState, useCallback, useEffect } from 'react'
import { Debounce } from '../../Shared/Util'
import styles from './inputwithsuggestion.module.css'

export default function InputWithSuggestion(props) {

    const [suggestions, setSuggestions] = useState([])
    const [selectedSuggestion, setSelectedSuggestion] = useState({})

    const register = props.registerFn
    const setValue = props.setValueFn

    const onChange = (search) => {
        return search ? props.onChangeFn(search)
            .then((data) => {
                setSuggestions(data.suggestions)
            }) : setSuggestions([])
    }

    const debouncedFn = useCallback(Debounce(onChange, 1000), [])

    function handleClick(suggestion) {
        setSelectedSuggestion(suggestion)
        setSuggestions([])
    }

    useEffect(() => {
        setValue(props.name, selectedSuggestion?.label)
    }, [selectedSuggestion])

    useEffect(() => {
        if (props.value) setSelectedSuggestion(props.value)
    }, [])

    return (
        <div className={`${styles.inputSuggestion}`}>
            <input type="text" className="form-control" placeholder={props.placeholder} {...register(props.name, { required: props.required, setValueAs: () => selectedSuggestion })} onChange={(e) => debouncedFn(e.target.value)} />
            <ul className="list-group position-absolute">
                {
                    suggestions?.map(suggestion => {
                        return (<li key={suggestion.id} role="button" className={`list-group-item`} onClick={() => handleClick(suggestion)}>{suggestion.label}</li>)
                    })
                }
            </ul>
        </div>
    )
}
