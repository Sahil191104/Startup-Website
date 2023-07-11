import React from 'react';
import { InputBox } from './input.style';

function Input({...rest }) {
    return (
        <>
            <InputBox className='form-control' {...rest} />
        </>
    );
}

export default Input;