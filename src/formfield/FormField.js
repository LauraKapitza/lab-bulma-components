import React from 'react';
import 'bulma/css/bulma.css';

const FormField = props => {
    return (
        <div className='field'>
            <label className='label'>
                {props.label}
                <input className='input' type={props.type} placeholder={props.placeholder} />
            </label>
        </div>
    )
}

export default FormField;