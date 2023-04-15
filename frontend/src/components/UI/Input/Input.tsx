import React from 'react';
import './Input.css';

interface props {
    placeholder?: string;
    value: string;
    onChangeHandler?: (event: any) => void;
}

const Input = ({placeholder, onChangeHandler, value}: props) => {
    return (
        <input
            type="text"
            className={'input'}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}/>
    );
};

export default Input;