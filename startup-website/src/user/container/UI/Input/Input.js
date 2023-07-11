import React from 'react';
import { InputBox, InputError } from './input.style';

function Input({ errorText, ...rest }) {
    return (
        <>
            <InputBox errorText={errorText} className='form-control' {...rest} />
            <InputError errorText={errorText}>{errorText}</InputError>
        </>
    );
}

export default Input;