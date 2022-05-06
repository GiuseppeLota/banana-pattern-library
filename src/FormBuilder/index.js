import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { SelectWithBadges } from '../SelectWithBadges';
import { InputWithSuggestion } from '../InputWithSuggestion';

export function FormBuilder(props) {

    const [uploadFiles, setUploadFiles] = useState([]);

    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

    useEffect(() => {
        props.fields.forEach(field => {
            if (field.value && field.type !== 'SelectWithBadges') {
                setValue(field.name, field.value)
            }
        })
    }, [])

    function renderInputField(field) {
        switch (field.type) {
            case 'text':
                return (
                    <div className="col-sm-8 text-secondary">
                        <input type="text" className="form-control" placeholder={field.placeholder} {...register(field.name, { required: field.required })} />
                        {errors[field.name] && <span>This field is required</span>}
                    </div>
                )
            case 'textWithSuggestion':
                return (
                    <div className="col-sm-8 text-secondary">
                        <InputWithSuggestion registerFn={register} setValueFn={setValue} getValuesFn={getValues} {...field} />
                    </div>
                )
            case 'select':
                return (
                    <div className='col-sm-4 '>
                        <select className="form-select" defaultValue={'default'} {...register(field.name, { required: field.required })}>
                            <option value={'default'} disabled>
                                { field.placeholder || 'Choose an option'}
                            </option>
                            {
                                field.items.map(item => {
                                    return <option key={item.id} value={item.id}>{item.value}</option>
                                })
                            }
                        </select>
                        {errors[field.name] && <span>This field is required</span>}
                    </div>
                )
            case 'radio':
                return (
                    <div className="btn-group col-sm-6" role="group" aria-label="Basic radio toggle button group">
                        {
                            field.items.map(item => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <input type="radio" className="btn-check" value={item.id} id={item.id} {...register(field.name, { required: field.required })} />
                                        <label className="btn btn-outline-primary" htmlFor={item.id}>{item.value}</label>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                )
            case 'SelectWithBadges':
                return (
                    <div className={`col-sm-6 text-secondary d-flex`}>
                        <SelectWithBadges registerFn={register} setValueFn={setValue} {...field} />
                    </div>
                )
            case 'image':
                return (
                    <div className={`col-sm-6 text-secondary d-flex`}>
                        <input type="file" className="form-control" multiple onChange={(e) => setUploadFiles(e.target.files)} {...register(field.name, { required: field.required, setValueAs: () => uploadFiles })} />
                    </div>
                )
            case 'checkbox':
                return (
                    <div className={`col-sm-6 text-secondary d-flex`}>
                        <input className="form-check-input" type="checkbox" value="" aria-label="..." {...register(field.name, { required: field.required })}></input>
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <form className={`ps-3 col-lg-8`} onSubmit={handleSubmit(props.submit.fn)}>
            <h2 className="my-4">{props.formHeader}</h2>
            {
                props.fields.map((field, index) => {
                    return (
                        <div key={index} className="row mb-3">
                            <div className="col-sm-4">
                                <h6 className="mb-0">{field.label}</h6>
                                {
                                    field.subLabel
                                }
                            </div>
                            {renderInputField(field)}
                        </div>
                    )
                })
            }
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-9 text-secondary">
                    <input type="submit" className="btn btn-primary px-4 text-uppercase" value={props.submit.label} />
                </div>
            </div>

        </form>
    )
}
